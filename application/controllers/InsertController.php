<?php
defined('BASEPATH') or exit('No direct script access allowed');

class InsertController extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->isConnected();
    }

    public function insert_details_user()
    {
        $this->load->model("Utilisateur");
        $idGenre = $this->input->post('idGenre');
        $taille = $this->input->post('taille');
        $poids = $this->input->post('poids');
        $id_user = $this->session->userdata('user')['id_utilisateur'];
        $result = $this->Utilisateur->insertDétails_User($idGenre, $taille, $poids, $id_user);
        echo $result;
    }

    public function isConnected()
    {
        if (!$this->session->has_userdata('user')) {
            redirect("" . base_url() . "LoginController");
        }
    }
}