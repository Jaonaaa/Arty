<?php

function nextId($prefixe, $number) {
  $response = "$number";
  while (strlen($response) != 6) {
    $response = "0".$response;
  }
  $response = "$prefixe$response";
  return $response;
}