<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Sport extends CI_Controller {

  public function find_all() {
    $this->load->model("Sport_model");
    echo json_encode($this->Sport_model->find_all());
  }

  public function insert() {
    $this->load->model("Sport_model");
    $name = $this->input->get("name");
    $poids_quotidien = $this->input->get("poids_quotidien");
    try {
      $this->Sport_model->insert($name, $poids_quotidien);
      echo 1;
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}