<?php

class Recharge_code_model extends CI_Model {

  public function find_all() {
    $query = $this->db->get("code_recharge");
    return $query->result_array();
  }

  public function setCode($code) {
    if (strlen($code) != 5) {
      throw new Exception("Le code de recharge doit etre de 5 chiffres");
    }
  }

  public function setPrice($price) {
    if ($price < 0) {
      throw new Exception("Le prix est negative");
    }
  }

  public function init($code, $price) {
    $this->setCode($code);
    $this->setPrice($price);
  }

  public function insert($code, $price) {
    $newId = nextval("sequence_code_recharge");
    $newId = nextId("coderecharge", $newId);
    $state = 0;
    $this->init($code, $price);
    $data = array(
      "id_code_recharge" => $newId,
      "code" => $code,
      "prix" => $price,
      "etat" => $state
    );
    $this->db->insert("code_recharge", $data);
  }
}