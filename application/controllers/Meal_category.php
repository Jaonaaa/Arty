<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Meal_category extends CI_Controller {

  public function find_all() {
    $this->load->model("Meal_category_model");
    echo json_encode($this->Meal_category_model->find_all());
  }
}