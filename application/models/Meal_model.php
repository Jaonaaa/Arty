<?php

class Meal_model extends CI_Model {

  public function find_all() {
    $query = $this->db->get("repas");
    return $query->result_array();
  }

  public function setNom($nom) {
    $nom = trim($nom);
  }

  public function setCalorie($calorie) {
    if ($calorie < 0) {
      throw new Exception("Nombre de calorie negatif");
    }
  }

  public function setPrix($prix) {
    if ($prix < 0) {
      throw new Exception("Prix negatif");
    }
  }

  public function init($nom, $calorie, $prix) {
    $this->setNom($nom);
    $this->setCalorie($calorie);
    $this->setPrix($prix);
  }

  public function insert($nom, $calorie, $prix, $type_repas) {
    $this->init($nom, $calorie, $prix);
    $filename = upload_file("photo");
    $newId = nextval("sequence_repas");
    $newId = nextId("repas", $newId);
    $data = array(
      "id_repas" => $newId,
      "id_type_repas" => $type_repas,
      "nom" => $nom,
      "photo" => $filename,
      "calorie" => $calorie,
      "prix" => $prix
    );
    $this->db->insert("repas", $data);
  }
}