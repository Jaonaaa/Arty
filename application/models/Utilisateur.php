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






}