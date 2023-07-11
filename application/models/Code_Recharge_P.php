<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Code_Recharge_P extends CI_Model
{

    function __construct()
    {
        parent::__construct();
    }

    public function insert_request_bon_achat($id_code, $id_user)
    {
        $this->load->model("MyException");
        $connection = $this->db;
        $connection->trans_begin();

        $query = "INSERT INTO requete_code VALUES (%s,%s)";
        $query = sprintf(
            $query, $connection->escape($id_user), $connection->escape($id_code)
        );
        $connection->query($query);
        $this->update_state_code_recharge($connection, $id_code);

        $error = $this->MyException->errorDB($connection);
        if ($error) {
            return $this->MyException->getErrorMessage();
        } else {
            $connection->trans_commit();
            return json_encode(
                array(
                    "status" => "good",
                    "details" => "Requête ajouté"
                )
            );
        }
    }

    public function update_state_code_recharge($connection, $id_code)
    {
        $query = "UPDATE code_recharge set etat = 2 where id_code_recharge = %s";
        $query = sprintf(
            $query, $connection->escape($id_code)
        );
        $connection->query($query);
    }

    public function getAllValide_code()
    {
        $connection = $this->db;
        $query = "SELECT  * FROM code_recharge where etat != 1";
        $result = $connection->query($query);
        $array = [];
        foreach ($result->result_array() as $row) {
            array_push($array, $row);
        }
        return $array;
    }


}