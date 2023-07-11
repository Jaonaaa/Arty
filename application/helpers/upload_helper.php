<?php

function upload_file($userfile) {
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDirectory = 'uploads/';

    if ($_FILES[$userfile]['error'] === UPLOAD_ERR_OK) {
      date_default_timezone_set('America/Los_Angeles');
      $tempFile = $_FILES[$userfile]['tmp_name'];
      $extension = pathinfo($_FILES[$userfile]['name'], PATHINFO_EXTENSION);
      $newFileName = date('YmdHis') . '_' . uniqid() . '.' . $extension;
      $destinationFile = $uploadDirectory . $newFileName;
      
      if (move_uploaded_file($tempFile, $destinationFile)) {
        return $newFileName;
      } else {
        return false; 
      }
    } else {
      return false;
    }
  }
}

function upload_files($userfile) {
  $response = [];
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDirectory = 'uploads/';

    $fileCount = count($_FILES[$userfile]['name']);

    for ($i = 0; $i < $fileCount; $i++) {
      if ($_FILES[$userfile]['error'][$i] === UPLOAD_ERR_OK) {
        date_default_timezone_set('America/Los_Angeles');
        $tempFile = $_FILES[$userfile]['tmp_name'][$i];
        $extension = pathinfo($_FILES[$userfile]['name'][$i], PATHINFO_EXTENSION);
        $newFileName = date('YmdHis') . '_' . uniqid() . '.' . $extension;
        $destinationFile = $uploadDirectory . $newFileName;
        
        if (move_uploaded_file($tempFile, $destinationFile)) {
          $response[] = $newFileName;
        } else {
          $response[] = false;
        }
      } else {
        $respons[] = false;
      }
    }
  }
}
