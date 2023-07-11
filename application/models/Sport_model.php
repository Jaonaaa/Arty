<?php

class Sport_model extends CI_Model {

  public function find_all() {
    $query = $this->db->get("sport");
    return $query->result_array();
  }

  public function insert($name, $poids_quotidien) {
    $newId = nextval("sequence_sport");
    $newId = nextId("sport", $newId);
    $data = array(
      "id_sport" => $newId,
      "nom" => $name,
      "poids_quotidien" => $poids_quotidien
    );
    $this->db->insert("sport", $data);
  }
}