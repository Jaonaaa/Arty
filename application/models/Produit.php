<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Produit extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }

    public function selectAllProduits($idEntreprise, $connection)
    {
        $query = "SELECT * FROM Produit WHERE identreprise = $idEntreprise ";
        $result = $connection->query($query);
        $array = [];
        foreach ($result->result_array() as $row) {
            array_push($array, $row);
        }
        return $array;
    }
    public function getCoutParProduit($idEntreprise, $idProduit)
    {
        $connection = $this->db;
        $connection->trans_begin();
        $query = "select * from ChargeProduit where ChargeProduit.idEntreprise = $idEntreprise AND idProduit = $idProduit";
        $result = $connection->query($query);
        $couttotal = 0;
        foreach ($result->result_array() as $row) {
            $numcompte = $row['numcompte'];
            $taux = $row['taux'];
            $query = "select SUM(valeurtotal) totale from analytique where numcompte = $numcompte and idEntreprise = $idEntreprise";
            $response = $connection->query($query);
            $valueTotal = $response->row_array()['totale'];

            $couttotal += ($valueTotal * $taux) / 100;
        }
        //
        $error = $this->MyException->errorDB($connection);
        if ($error) {
            return $this->MyException->getErrorMessage();
        } else {
            $connection->trans_commit();
            return json_encode(array("status" => "good", "coutTotal" => $couttotal));
        }
    }

    public function insertProduct($idEntreprise, $name)
    {
        $connection = $this->db;
        $connection->trans_begin();

        $query = "INSERT INTO Produit VALUES(default,%s,%s)";
        $query = sprintf($query, $connection->escape($idEntreprise), $connection->escape($name));
        $connection->query($query);
        //
        $idProduct = $this->getLastProduct($connection, $idEntreprise);
        $this->organiseChargeProduct($idEntreprise, $idProduct, $connection);
        //
        // centre qui a été insérer 
        $produit = $this->getProduitById($connection, $idEntreprise, $idProduct);
        //
        $error = $this->MyException->errorDB($connection);
        if ($error) {
            return $this->MyException->getErrorMessage();
        } else {
            $connection->trans_commit();
            return json_encode(array("status" => "good", "details" => "Produit " . $name . " enregistré ", "new_produit" => $produit));
        }
    }

    public function getLastProduct($connection, $idEntreprise)
    {
        $sql = "SELECT MAX(id) as idmax FROM Produit where idEntreprise = $idEntreprise ";
        $result = $connection->query($sql);
        $row = $result->row_array();
        return $row['idmax'];
    }

    public function getProduitById($connection, $idEntreprise, $idProduit)
    {
        $query = "SELECT * FROM Produit WHERE idEntreprise = $idEntreprise AND id = $idProduit";
        $result = $connection->query($query);
        $row = $result->row_array();
        return $row;
    }

    public function organiseChargeProduct($idEntreprise, $idProduct, $connection)
    {
        $query = "select DISTINCT(numcompte,idEntreprise) duo from chargeProduit where idEntreprise = $idEntreprise";
        $result = $connection->query($query);
        foreach ($result->result_array() as $row) {
            $numCompte = explode(",", explode(")", explode("(", $row['duo'])[1])[0])[0];
            $query = "INSERT INTO chargeProduit VALUES(default,$idEntreprise,$idProduct,$numCompte,0)";
            $connection->query($query);
        }
    }


    public function toAbs($number)
    {
        if ($number < 0) {
            $number = $number * -1;
        }
        return $number;
    }

    public function refullZero($text, $number)
    {
        if (strlen($text) < $number) {
            $lenghtInit = strlen($text);
            for ($i = 0; $i < $number - $lenghtInit; $i++) {
                $text = $text . "0";
            }
        }
        return $text;
    }

}