<?php

class Regime_model extends CI_Model {

  public function find_all() {
    $query = $this->db->get("regime");
    return $query->result_array();
  }

  public function insert($nom, $duree, $breakfast, $lunch, $diner) {
    $newId = nextval("sequence_regime");
    $newId = nextId("regime", $newId);
    $data = array(
      "id_regime" => $newId,
      "nom" => $nom,
      "duree" => $duree
    );
    $this->db->insert("regime", $data);

    for ($i=0; $i < count($breakfast); $i++) { 
      $bfID = nextval("sequence_regime_repas");
      $bfID = nextId("regimerepas", $bfID);
      $bf = array(
        "id_regime_repas" => $bfID,
        "id_regime" => $newId,
        "id_repas" => $breakfast[$i],
        "n_jour" => ($i + 1)
      );

      $lcID = nextval("sequence_regime_repas");
      $lcID = nextId("regimerepas", $lcID);
      $lc = array(
        "id_regime_repas" => $lcID,
        "id_regime" => $newId,
        "id_repas" => $lunch[$i],
        "n_jour" => ($i + 1)
      );

      $dID = nextval("sequence_regime_repas");
      $dID = nextId("regimerepas", $dID);
      $d = array(
        "id_regime_repas" => $dID,
        "id_regime" => $newId,
        "id_repas" => $diner[$i],
        "n_jour" => ($i + 1)
      );

      $this->db->insert("regime_repas", $bf);
      $this->db->insert("regime_repas", $lc);
      $this->db->insert("regime_repas", $d);
    }
  }
}