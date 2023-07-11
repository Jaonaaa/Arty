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


	public function sign_in($email = "", $pwd = "")
	{
		$this->load->model("Login_Front");
		$email = $this->input->post('email_user');
		$pwd = $this->input->post('pwd_user');
		$result = $this->Login_Front->check_sign_in($email, $pwd);

		if ($result != false) {
			$this->session->set_userdata('user', $result);
			echo json_encode(array("status" => "good", "details" => "Compte connecté"));
		} else {
			echo json_encode(array("status" => "error", "details" => "Compte inexistant"));
		}
	}

	public function sign_in_forced($email = "", $pwd = "")
	{
		$this->load->model("Login_Front");
		$email = str_replace("arrow_base_xr", "@", $email);
		$result = $this->Login_Front->check_sign_in($email, $pwd);
		////
		if ($result != false) {
			$this->session->set_userdata('user', $result);
			redirect("" . base_url() . "HomeController");
		} else {
			redirect("" . base_url() . "LoginController?errorLog");
		}
	}
	public function sign_up()
	{
		$this->load->model("Login_Front");
		///
		$name = $this->input->post('name_user');
		$email = $this->input->post('email_user');
		$pwd = $this->input->post('pwd_user');
		$dtn = $this->input->post('dtn_user');
		///
		$result = $this->Login_Front->insert_user($name, $email, $pwd, $dtn);
		//
		echo $result;
	}

	public function isLogged()
	{
		if ($this->session->has_userdata('user')) {
			redirect("" . base_url() . "HomeController");
		}
	}
}