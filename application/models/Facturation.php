<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Facturation extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }


    public function validate_facturation($id_regime, $id_sport)
    {
        date_default_timezone_set('Indian/Antananarivo');
        $this->load->model("MyException");
        $connection = $this->db;
        $date = new DateTime();
        $date_now = explode(" ", $date->date)[0];
        $connection->trans_begin();

        if ($this->checkMonnaieEnough(1000000, $connection)) {
            $id = nextval('sequence_utilisateur_regime');
            $query = "INSERT INTO utilisateur_regime VALUES (%s,%s,%s,%s)";
            $query = sprintf(
                $query, $connection->escape($id), $connection->escape($id_regime), $connection->escape($id_sport),
                $connection->escape($date_now)
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
                        "details" => "User"
                    )
                );
            }
        } else {
            return json_encode(
                array(
                    "status" => "error",
                    "details" => "Vous n'avez pas assez d'argent"
                )
            );
        }
    }

    public function checkMonnaieEnough($prix_regime_total, $connection)
    {
        $this->load->model("Porte_monnaie");
        $this->load->model("Utilisateur");
        $this->Utilisateur->rechargeUser();
        $user = $this->session->userdata("user");
        $porteMonnaie = $user["monnaie"]["valeur"];
        if ($porteMonnaie >= $prix_regime_total) {
            $new_argent = $porteMonnaie - $prix_regime_total;
            $this->Porte_monnaie->update_porte_monnaie($connection, $user["id_utilisateur"], $new_argent);
            return true;
        } else {
            return false;
        }

    }





}