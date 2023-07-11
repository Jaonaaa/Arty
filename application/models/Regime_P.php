<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Regime_P extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }



    public function getStatRegime($duration, $poids, $type)
    {
        $connection = $this->db;
        $allRegime = $this->getAllRegime($connection, 15);
        $correspodantes = $this->correspondateRegime($allRegime);
        $sportsData = $this->getSportsData($connection, $duration);
        $list = $this->combineSportRegime($correspodantes, $sportsData, $poids);
        $list = $this->filterCorrectMethod($type, $list);
        sort($list);
        return ($list);
    }

    public function filterCorrectMethod($type, $list)
    {
        $correctValue = [];
        foreach ($list as $row) {
            if ($type == "prendre") // 
            {
                if ($row["poidsTotalConsommer"] > 0) {
                    array_push($correctValue, $row);
                }
            } else if ($type == "perdre") {
                if ($row["poidsTotalConsommer"] < 0) {
                    array_push($correctValue, $row);
                }
            } else if ($type == "imc") {
                if ($row["poidsTotalConsommer"] > 0) {
                    array_push($correctValue, $row);
                }

            }
        }
        return $correctValue;
    }

    public function combineSportRegime($regimes, $sports, $poids)
    {
        $sportRegimes = [];
        foreach ($regimes as $regime) {
            foreach ($sports as $sport) {
                $sport["poids_consommer"] = $sport["poids_quotidien"] * (int) $regime['regime']['duree'];
                $poidsConsommertotal = $regime['poids'] + $sport["poids_consommer"];
                $diff = $poids - $poidsConsommertotal;
                array_push(
                    $sportRegimes,
                    array(
                        "regime" => $regime,
                        "sport" => $sport,
                        "poidsTotalConsommer" => $poidsConsommertotal,
                        "differenceRequis" => $diff
                    )
                );
            }
        }
        return $sportRegimes;
    }

    public function getSportsData($connection, $duration)
    {
        $sports = $this->getAllSport($connection);
        $da = array();
        foreach ($sports as $sport) {
            array_push($da, $sport);
        }
        return $da;
    }

    public function getAllSport($connection)
    {
        $query = "SELECT * FROM sport ";
        $result = $connection->query($query);
        $data = [];
        foreach ($result->result_array() as $row) {
            array_push($data, $row);
        }
        return $data;
    }
    public function getSport($connection, $id_sport)
    {
        $query = "SELECT * FROM sport where id_sport = '$id_sport'";
        $result = $connection->query($query);
        return $result->row_array();
    }
    public function getUserRegimes($connection)
    {
        $iduser = $this->session->userdata('user')["id_utilisateur"];
        $query = "SELECT * FROM utilisateur_regime where id_utilisateur = '$iduser' ";
        $result = $connection->query($query);
        $data = [];
        foreach ($result->result_array() as $row) {
            $regime = $this->getRegime($connection, $row["id_regime"]);
            $row["details"] = $regime;
            array_push($data, $row);
        }

        return $data;
    }
    public function getRegime($connection, $id_regime)
    {
        $query = "SELECT * FROM regime WHERE id_regime = '$id_regime'";
        $result = $connection->query($query);
        $regime = [];
        foreach ($result->result_array() as $row) {
            $details = $this->getAllProgrammeRegime($connection, $row["id_regime"]);
            //
            $repas_details = [];
            foreach ($details as $detail) {
                $detail["repas"] = $this->getRepas($connection, $detail["id_repas"]);
                array_push($repas_details, $detail);
            }
            $row["details"] = $repas_details;
            $regime = $row;
        }

        $data = $this->getInfoRegime($regime);
        return array("regime" => $regime, "data" => $data);
    }


    public function getAllRegime($connection, $duration)
    {
        $query = "SELECT * FROM regime WHERE CONVERT(duree, UNSIGNED INTEGER) <= $duration";
        $result = $connection->query($query);
        $array = [];
        foreach ($result->result_array() as $row) {
            $details = $this->getAllProgrammeRegime($connection, $row["id_regime"]);
            //
            $repas_details = [];
            foreach ($details as $detail) {
                $detail["repas"] = $this->getRepas($connection, $detail["id_repas"]);
                array_push($repas_details, $detail);
            }
            $row["details"] = $repas_details;
            array_push($array, $row);
        }
        return $array;
    }
    public function getAllProgrammeRegime($connection, $idRegime)
    {
        $query = "SELECT * from regime_repas where id_regime = '$idRegime' ORDER BY n_jour ASC;";
        $result = $connection->query($query);
        $array = [];
        foreach ($result->result_array() as $row) {
            array_push($array, $row);
        }
        return $array;
    }
    ////
    public function getInfoRegime($regime)
    {
        $plats = $regime["details"];
        $totalCalorie = 0;
        $totalPrix = 0;

        foreach ($plats as $plat) {
            $totalCalorie += $this->getCalorie($plat["repas"]);
            $totalPrix += $plat["repas"]["prix"];
        }
        $kgEnQuestion = $totalCalorie / 500;
        return array("poids" => $kgEnQuestion, "prix" => $totalPrix);
    }
    public function getCalorie($plat)
    {
        $calorie = $plat["calorie"];
        $decalage = $calorie - 500;
        return $decalage;
    }

    public function correspondateRegime($all_regime)
    {
        $regime_mety = [];

        foreach ($all_regime as $regime) {
            $data = $this->getInfoRegime($regime);
            array_push($regime_mety, array("prix" => $data['prix'], "poids" => $data['poids'], "regime" => $regime));
        }
        return $regime_mety;
    }

    public function getRepas($connection, $id_repas)
    {
        $query = "SELECT * from repas where id_repas = '$id_repas'";
        $result = $connection->query($query);
        $row = $result->row_array();
        return $row;
    }

}