<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Regime extends CI_Controller {

  public function find_all() {
    $this->load->model("Regime_model");
    echo json_encode($this->Regime_model->find_all());
  }

  public function price_day() {
    $id_regime = $this->input->get("regime");
    $this->load->model("Regime_model");
    echo json_encode($this->Regime_model->price_day($id_regime));
  }

  public function find_meals() {
    $id_regime = $this->input->get("regime");
    $this->load->model("Regime_model");
    echo json_encode($this->Regime_model->find_meals($id_regime));
  }

  public function find_nutriment() {
    $id_regime = $this->input->get("regime");
    $this->load->model("Regime_model");
    echo json_encode($this->Regime_model->find_nutriment($id_regime));
  }

  public function price_regime() {
    $id_regime = $this->input->get("regime");
    $this->load->model("Regime_model");
    echo json_encode($this->Regime_model->price_regime($id_regime));
  }

  public function insert() {
    $nom = $this->input->post("nom");
    $duree = $this->input->post("duree");
    $legume = $this->input->post("legume");
    $viande = $this->input->post("viande");
    $volaille = $this->input->post("volaille");
    $poisson = $this->input->post("poisson");

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
      $this->Regime_model->insert($nom, $duree, $breakfast, $lunch, $diner, $legume, $viande, $volaille, $poisson);
      echo 1;
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}