<?php
defined('BASEPATH') or exit('No direct script access allowed');

class HomeController extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        //
        $this->isConnected();
        $this->load->model("Utilisateur");
        $this->Utilisateur->rechargeUser();
    }

    public function index()
    {
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "Home";
        $this->load->view('Home', $data);
    }

    public function regime()
    {
        $this->load->model("Regime_P");
        $connection = $this->db;
        $data["regimes"] = $this->Regime_P->getUserRegimes($connection);
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "regime";
        $this->load->view('Regime', $data);
    }
    public function Facturation($id_regime, $id_sport)
    {
        $this->load->model("Regime_P");
        $connection = $this->db;
        $data["regime"] = $this->Regime_P->getRegime($connection, $id_regime);
        $data["sport"] = $this->Regime_P->getSport($connection, $id_sport);
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "facturation";
        $this->load->view('Facturation', $data);
    }

    public function getChoixPoids()
    {
        $this->load->model('Choix');

        $result = $this->Choix->selectChoixPoids();
        echo json_encode(
            array(
                "status" => "good",
                "details" => $result,
            )
        );
    }

    public function getChoixDuration()
    {
        $this->load->model('Choix');

        $result = $this->Choix->selectChoixDuration();
        echo json_encode(
            array(
                "status" => "good",
                "details" => $result,
            )
        );
    }



    public function bon_achat()
    {
        $this->load->model("Code_Recharge_P");
        $data['codes'] = $this->Code_Recharge_P->getAllValide_code();
        $data["users"] = $this->session->userdata('user');
        $data['ind'] = "bon_achat";
        $this->load->view('Bon_Achat', $data);
    }

    public function requeste_bon_achat($id_code)
    {
        $this->load->model("Code_Recharge_P");
        $id_user = $this->session->userdata('user')['id_utilisateur'];
        $this->Code_Recharge_P->insert_request_bon_achat($id_code, $id_user);
        redirect("" . base_url() . "HomeController/bon_achat?setted");
    }


    public function get_suggestions()
    {
        $this->load->model("Regime_P");
        $to_do = $_POST["type"];
        $duration = $_POST["duration"];
        $poids = $_POST["poids"];
        // echo json_encode(array("status" => "Il veut " . $to_do . " " . $poids . " kg pendant " . $duration . " jour"));
        $result = $this->Regime_P->getStatRegime($duration, $poids, $to_do);
        echo json_encode($result);
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