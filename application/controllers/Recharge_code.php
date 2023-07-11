<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Recharge_code extends CI_Controller {

  public function find_all() {
    $this->load->model("Recharge_code_model");
    echo json_encode($this->Recharge_code_model->find_all());
  }

  public function insert() {
    $this->load->model("Recharge_code_model");
    $code = $this->input->get("code");
    $prix = $this->input->get("prix");
    try {
      $this->Recharge_code_model->insert($code, $prix);
      echo 1;
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}