<?php

class Recharge_code_model extends CI_Model {

  public function find_all() {
    $query = $this->db->get("code_recharge");
    return $query->result_array();
  }

  public function setCode($code) {
    if (strlen($code) != 5) {
      throw new Exception("Le code de recharge doit etre de 5 chiffres");
    }
  }

  public function setPrice($price) {
    if ($price < 0) {
      throw new Exception("Le prix est negative");
    }
  }

  public function init($code, $price) {
    $this->setCode($code);
    $this->setPrice($price);
  }

  public function insert($code, $price) {
    $newId = nextval("sequence_code_recharge");
    $newId = nextId("coderecharge", $newId);
    $state = 0;
    $this->init($code, $price);
    $data = array(
      "id_code_recharge" => $newId,
      "code" => $code,
      "prix" => $price,
      "etat" => $state
    );
    $this->db->insert("code_recharge", $data);
  }

  public function confirm($id_utilisateur, $id_code_recharge) {
    $delete = "
      DELETE FROM requete_code WHERE id_code_recharge = '$id_code_recharge'
    ";
    $this->db->query($delete);

    $update = "
      UPDATE code_recharge set etat = 1 WHERE id_code_recharge = '$id_code_recharge'
    ";
    $this->db->query($update);

    $updateMoney = "
      UPDATE argent
      SET valeur = (
        SELECT total_valeur
        FROM (
          SELECT valeur + (SELECT prix FROM code_recharge WHERE id_code_recharge = '$id_code_recharge') AS total_valeur
          FROM argent argent
          WHERE id_utilisateur = '$id_utilisateur'
        ) AS subquery
      )
      WHERE id_utilisateur = '$id_utilisateur'
    ";
    $this->db->query($updateMoney);
  }

  public function query_code() {
    $query = "
      SELECT
        utilisateur.id_utilisateur,
        utilisateur.nom AS utilisateur,
        code_recharge.code AS code,
        code_recharge.prix AS prix,
        code_recharge.id_code_recharge
      FROM
        requete_code
        JOIN utilisateur ON requete_code.id_utilisateur = utilisateur.id_utilisateur
        JOIN code_recharge ON requete_code.id_code_recharge = code_recharge.id_code_recharge
    ";
    $result = $this->db->query($query);
    return $result->result_array();
  }
}