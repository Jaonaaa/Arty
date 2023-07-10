<?php

function nextval($sequence)
{
  $CI =& get_instance();
  $CI->load->database();

  $query = $CI->db->select('valeur')->get($sequence, 1);
  $row = $query->row();
  if ($row) {
    $CI->db->update($sequence, array("valeur" => $row->valeur + 1));
    return $row->valeur;
  }
  return null;
}