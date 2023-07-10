<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login_Front extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }

    public function insert_user($name, $email, $pwd, $dtn)
    {
        $this->load->model("MyException");
        $connection = $this->db;
        if (!$this->checkAgeMin($dtn))
            return json_encode(array("status" => "error", "details" => "Vous devez avoir au moins 5 ans"));
        $connection->trans_begin();
        if ($this->check_available_user($email, $connection) != false) {
            ///
            $iduser = nextval('sequence_utilisateur');
            $query = "INSERT INTO utilisateur VALUES (%s,%s,%s,%s,%s,%s)";
            $query = sprintf(
                $query, $connection->escape($iduser), $connection->escape($name), $connection->escape($email),
                $connection->escape($pwd), $connection->escape($dtn), $connection->escape(0)
            );
            $connection->query($query);
            //
            $error = $this->MyException->errorDB($connection);
            if ($error) {
                return $this->MyException->getErrorMessage();
            } else {
                $connection->trans_commit();
                return json_encode(
                    array(
                        "status" => "good",
                        "details" => "User " . $name . " inscrit",
                        "email" => $email,
                        "pwd" => $pwd
                    )
                );
            }
        } else {
            return json_encode(array("status" => "error", "details" => "Email déja existant"));
        }
    }

    public function checkAgeMin($dtn)
    {
        date_default_timezone_set('Indian/Antananarivo');
        $now = new DateTime();
        $date_dtn = new DateTime($dtn);
        $diff = $date_dtn->diff($now);
        if ($diff->y < 5) {
            return false;
        } else {
            return true;
        }
    }

    public function check_available_user($email, $connection)
    {
        $query = "SELECT  * FROM utilisateur where email = %s";
        $query = sprintf($query, $connection->escape($email));
        $result = $connection->query($query);
        $row = $result->row_array();

        if ($row != null) {
            return false;
        } else {
            return true;
        }
    }

    public function check_sign_in($email, $pwd)
    {
        $this->load->model("Utilisateur");
        $connection = $this->db;
        $query = "SELECT  * FROM utilisateur where email = %s AND mot_de_passe = %s";
        $query = sprintf($query, $connection->escape($email), $connection->escape($pwd));
        $result = $connection->query($query);
        $row = $result->row_array();
        if ($result == null) {
            return false;
        }
        if ($row != null) {
            $data_user = $this->Utilisateur->getDetails_User($connection, $row["id_utilisateur"]);
            $row["data_user"] = $data_user;
            return $row;
        } else {
            return false;
        }
    }






}