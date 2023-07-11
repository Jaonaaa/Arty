<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Regime extends CI_Controller {

  public function find_all() {
    $this->load->model("Regime_model");
    echo json_encode($this->Regime_model->find_all());
  }

  public function insert() {
    $nom = $this->input->post("nom");
    $duree = $this->input->post("duree");

    $breakfast = [];
    $lunch = [];
    $d = [];

    for ($i = 1; $i <= $duree; $i ++) {
      $breakfast[] = $this->input->post("petit_dejeuner_$i");
      $lunch[] = $this->input->post("dejeuner_$i");
      $diner[] = $this->input->post("diner_$i");
    }

    $this->load->model("Regime_model");
    try {
      $this->Regime_model->insert($nom, $duree, $breakfast, $lunch, $diner);
      echo 1;
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}