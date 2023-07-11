<?php
defined('BASEPATH') or exit('No direct script access allowed');

class HomeController extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        //
        $this->isConnected();
    }

    public function index()
    {
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "Home";
        $this->load->view('Home', $data);
    }

    public function regime()
    {
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "regime";
        $this->load->view('Regime', $data);
    }
    public function Facturation()
    {
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "facturation";
        $this->load->view('Facturation', $data);
    }

    public function bon_achat()
    {
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "bon_achat";
        $this->load->view('Bon_Achat', $data);
    }


    public function log_out()
    {
        $this->session->sess_destroy();
        redirect("" . base_url() . "LoginController");
    }

    public function isConnected()
    {
        if (!$this->session->has_userdata('user')) {
            redirect("" . base_url() . "LoginController");
        }
    }
}