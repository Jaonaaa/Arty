<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Choix extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        //
    }


    public function selectChoixPoids()
    {
        $this->load->model("MyException");
        $connection = $this->db;

        $query = "SELECT * FROM choix_poids ";
        $result = $connection->query($query);
        $array = [];
        foreach ($result->result_array() as $row) {
            array_push($array, $row);
        }
        return $array;
    }

    public function selectChoixDuration()
    {
        $this->load->model("MyException");
        $connection = $this->db;

        $query = "SELECT * FROM choix_duration  ";
        $result = $connection->query($query);
        $array = [];
        foreach ($result->result_array() as $row) {
            array_push($array, $row);
        }
        return $array;
    }




}