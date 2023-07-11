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
        $this->load->model("Regime_P");

        $connection = $this->db;
        $regime = $this->Regime_P->getRegime($connection, $id_regime);
        $prixRegime = $regime["data"]["prix"];
        $d = new DateTime();
        var_dump($d);
        $date_now = explode(" ", $d->date)[0];
        $connection->trans_begin();
        if ($this->checkMonnaieEnough($prixRegime, $connection)) {
            $id = nextval('sequence_utilisateur_regime');
            $query = "INSERT INTO utilisateur_regime VALUES (%s,%s,%s,%s,%s)";
            $user = $this->session->userdata("user");
            $query = sprintf(
                $query, $connection->escape($id), $connection->escape($id_regime), $connection->escape($id_sport),
                $connection->escape($date_now), $connection->escape($user["id_utilisateur"])
            );
            var_dump($user);
            echo $query;
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
            return false;
        }
    }

    public function checkMonnaieEnough($prix_regime_total, $connection)
    {
        $this->load->model("Porte_monnaie_P");
        $this->load->model("Utilisateur");
        $this->Utilisateur->rechargeUser();
        $user = $this->session->userdata("user");
        $porteMonnaie = $user["monnaie"]["valeur"];

        if ($porteMonnaie >= $prix_regime_total) {
            $new_argent = $porteMonnaie - $prix_regime_total;
            $this->Porte_monnaie_P->update_porte_monnaie($connection, $user["id_utilisateur"], $new_argent);
            return true;
        } else {
            return false;
        }

    }





}