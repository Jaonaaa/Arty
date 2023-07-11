<?php

class Regime_model extends CI_Model
{

  public function find_all()
  {
    $query = $this->db->get("regime");
    return $query->result_array();
  }

  public function price_day($id_regime)
  {
    $query = "
      SELECT
        n_jour,
        SUM(prix) AS prix
      FROM
        regime_repas
        JOIN
          repas ON regime_repas.id_repas = repas.id_repas
        WHERE id_regime = '$id_regime'
        GROUP BY n_jour
        ORDER BY n_jour ASC
    ";
    $result = $this->db->query($query);
    return $result->result_array();
  }


  public function price_regime() {
    $query = "
      SELECT
        regime.id_regime,
        regime.nom,
        SUM(prix) AS prix
      FROM
        regime_repas
        JOIN repas ON regime_repas.id_repas = repas.id_repas
        JOIN regime ON regime_repas.id_regime = regime.id_regime
        GROUP BY regime.id_regime, regime.nom
    ";
    $result = $this->db->query($query);
    return $result->result_array();
  }


  public function find_meals($id_regime)
  {
    $query = "
      SELECT
        DISTINCT(repas.id_repas),
        photo,
        nom,
        calorie,
        prix
      FROM
        regime_repas
        JOIN repas ON regime_repas.id_repas = repas.id_repas
        WHERE id_regime = '$id_regime'
    ";
    $result = $this->db->query($query);
    return $result->result_array();
  }


  public function find_nutriment($id_regime) {
    $query = $this->db->get_where("nutriment_regime", array("id_regime" => $id_regime));
    return $query->result_array();
  }

  public function setNutriment($legume, $viande, $volaille, $poisson) {
    if ($legume + $viande + $volaille + $poisson != 100) {
      throw new Exception("La somme des nutriments doit etre 100");
    }
  }

  public function insert($nom, $duree, $breakfast, $lunch, $diner, $legume, $viande, $volaille, $poisson) {
    $this->setNutriment($legume, $viande, $volaille, $poisson);

    $newId = nextval("sequence_regime");
    $newId = nextId("regime", $newId);
    $data = array(
      "id_regime" => $newId,
      "nom" => $nom,
      "duree" => $duree
    );
    $this->db->insert("regime", $data);


    $nutriment = array(
      "id_regime" => $newId,
      "legume" => $legume,
      "viande" => $viande,
      "volaille" => $volaille,
      "poisson" => $poisson
    );
    $this->db->insert("nutriment_regime", $nutriment);

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