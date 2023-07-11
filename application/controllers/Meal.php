<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Meal extends CI_Controller {

  public function find_all() {
    $this->load->model("Meal_model");
    echo json_encode($this->Meal_model->find_all());
  }

  public function breakfast() {
    $this->load->model("Meal_model");
    echo json_encode($this->Meal_model->breakfast());
  }

  public function lunch() {
    $this->load->model("Meal_model");
    echo json_encode($this->Meal_model->lunch());
  }

  public function diner() {
    $this->load->model("Meal_model");
    echo json_encode($this->Meal_model->diner());
  }

  public function insert() {
    $nom = $this->input->post("nom");
    $calorie = $this->input->post("calorie");
    $prix = $this->input->post("prix");
    $type_repas = $this->input->post("type_repas");

    $this->load->model("Meal_model");
    try {
      $this->Meal_model->insert($nom, $calorie, $prix, $type_repas);
      echo 1;
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}