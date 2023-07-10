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
        $this->load->view('Home', $data);
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