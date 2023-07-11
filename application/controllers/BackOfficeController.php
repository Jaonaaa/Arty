<?php
defined('BASEPATH') or exit('No direct script access allowed');

class BackOfficeController extends CI_Controller {

  public function index() {
    $this->load->view("BackOfficeLogin");
  }

  public function sign_in() {
    $this->load->model("Utilisateur");
    $email = $this->input->post("email");
    $pwd = $this->input->post("pwd");

    $connection = $this->db;
    $query = "SELECT  * FROM utilisateur where email = %s AND mot_de_passe = %s AND est_admin = 1";
    $query = sprintf($query, $connection->escape($email), $connection->escape($pwd));
    $result = $connection->query($query);
    $row = $result->row_array();
    if ($result == null) {
      return false;
    }
    $this->session->set_userdata("connected", true);
    $this->load->view("Backoffice");
  }
}