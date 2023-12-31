<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Utilisateur extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }
    public function getDetails_User($connection, $id_user)
    {
        $query = "SELECT  * FROM detail_utilisateur where id_utilisateur = %s ";
        $query = sprintf($query, $connection->escape($id_user));
        $result = $connection->query($query);
        $row = $result->row_array();
        return $row;
    }



    public function insertDétails_User($idGenre, $taille, $poids, $id_user)
    {
        $this->load->model("MyException");
        $connection = $this->db;
        $connection->trans_begin();
        $id_details = nextval('sequence_details_utilisateur');
        $query = "INSERT INTO detail_utilisateur VALUES (%s,%s,%s,%s,%s)";
        $query = sprintf(
            $query, $connection->escape($id_details), $connection->escape($idGenre),
            $connection->escape($poids),
            $connection->escape($taille),
            $connection->escape($id_user)
        );
        $connection->query($query);
        $error = $this->MyException->errorDB($connection);
        if ($error) {
            return $this->MyException->getErrorMessage();
        } else {
            $connection->trans_commit();
            $this->rechargeUser($connection);
            return json_encode(array("status" => "good", "details" => "Details user inseré"));
        }
    }

    public function rechargeUser()
    {
        $this->load->model('Login_Front');
        if ($this->session->has_userdata('user')) {
            $user = $this->session->userdata('user');
            $email = $user['email'];
            $pwd = $user['mot_de_passe'];
            $user = $this->Login_Front->check_sign_in($email, $pwd);
            if ($user != false) {
                $this->session->set_userdata('user', $user);
            }
        }

    }



}