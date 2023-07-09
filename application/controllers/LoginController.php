<?php
defined('BASEPATH') or exit('No direct script access allowed');

class LoginController extends CI_Controller
{
	function __construct()
	{
		parent::__construct();
		//
		$this->isLogged();
	}

	public function index()
	{
		$this->load->view('Login');
	}


	public function sign_in()
	{
		$this->session->set_userdata('user', "connected");
		//redirect("" . base_url() . "HomeController");
	}
	public function sign_up()
	{
	}

	public function isLogged()
	{
		if ($this->session->has_userdata('user')) {
			redirect("" . base_url() . "HomeController");
		}
	}
}