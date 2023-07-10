<?php

class Meal_category_model extends CI_Model {

  public function find_all() {
    $query = $this->db->get("type_repas");
    return $query->result_array();
  }
}