<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Porte_monnaie_P extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }

    public function insert_monnaie($connection, $monnaie, $id_utilisateur)
    {

        $query = "INSERT INTO argent VALUES (%s,%s)";
        $query = sprintf(
            $query, $connection->escape($id_utilisateur), $connection->escape($monnaie)
        );
        $connection->query($query);

    }

    public function get_monnaie($connection, $id_utilisateur)
    {
        $query = "SELECT * FROM argent WHERE id_utilisateur = %s";
        $query = sprintf(
            $query, $connection->escape($id_utilisateur), $connection->escape($id_utilisateur)
        );
        $result = $connection->query($query);
        $row = $result->row_array();
        return $row;
    }

    public function update_porte_monnaie($connection, $id_utilisateur, $new_argent)
    {
        $query = "UPDATE argent set valeur = %s WHERE id_utilisateur = %s";
        $query = sprintf(
            $query, $connection->escape($id_utilisateur), $connection->escape($new_argent), $connection->escape($id_utilisateur)
        );
        $result = $connection->query($query);
    }

}