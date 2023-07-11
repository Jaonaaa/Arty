import { renderRechargeCodeForm } from "../form/recharge_code.js";
import { ajax, base_url } from "../js/ajax.js";
import { paginate } from "../js/pagination.js";
import { Recharge_code } from "../models/recharge_code.js";

/**
 *
 * @param {*} code_confirm
 * @returns {HTMLDivElement}
 */
function codeConfirmCard(code_confirm) {
  let response = document.createElement("div");
  response.classList.add("code__card");

  response.innerHTML = `
    <p class="text">
      <span>${code_confirm.utilisateur}</span>
      <span>${code_confirm.code}</span>
      <span class="value">${code_confirm.prix} Ar</span>
      <span class="confirm-link">Confirmer</span>
    </p>
  `;

  let confirm = response.querySelector(".confirm-link");
  confirm.addEventListener("click", async () => {
    let result = await ajax(
      `${base_url}recharge_code/confirm?id_utilisateur=${code_confirm.id_utilisateur}&id_code_recharge=${code_confirm.id_code_recharge}`,
      "GET",
      null
    );
    if (result == 1) {
      renderRechargeCode();
    }
  });

  return response;
}

/**
 *
 * @param {*[]} code_fonfirms
 */
function listQueryCode(code_fonfirms) {
  let container = document.querySelector(".list__code");
  if (code_fonfirms.length == 0) {
    container.innerHTML = "Aucune requete de code";
    return;
  }
  code_fonfirms.forEach((code_confirm) => {
    container.appendChild(codeConfirmCard(code_confirm));
  });
}

/**
 *
 * @param {Recharge_code} recharge_code
 * @return {HTMLTableRowElement}
 */
function createRow(recharge_code) {
  let response = document.createElement("tr");

  let stateName = "";
  if (recharge_code.etat == 0) {
    stateName = "Valide";
  } else if (recharge_code.etat == 1) {
    stateName = "Invalide";
  } else if (recharge_code.etat == 2) {
    stateName = "En attente de confirmation";
  }

  response.innerHTML = `
    <td width="200px">${recharge_code.id_code_recharge}</td>
    <td width="200px">${recharge_code.code}</td>
    <td width="300px">${recharge_code.prix}Ar</td>
    <td width="300px">${stateName}</td>
  `;

  return response;
}

/**
 *
 * @param {Recharge_code[]} recharge_codes
 * @return {void}
 */
function add(recharge_codes) {
  let tbody = document.querySelector("table tbody");
  recharge_codes.forEach((recharge_code) => {
    tbody.appendChild(createRow(recharge_code));
  });
}

/**
 *
 * @return {void}
 */
function listenBtn() {
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", renderRechargeCodeForm);
}

/**
 *
 * @param {Recharge_code[]} recharge_codes
 * @return {void}
 */
async function update(recharge_codes) {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  let code_confirms = await ajax(
    `${base_url}recharge_code/query_code`,
    "GET",
    null
  );
  code_confirms = JSON.parse(code_confirms);

  window.setTimeout(() => {
    root.innerHTML = `
      <h1 class="title">Liste des codes en attentes</h1>
      <div class="list__code"></div>
      <h1 class="title">Liste des codes</h1>
      <div class="table">
        <div class="table__container">
          <table>
            <thead>
              <tr>
                <td width="200px">Id</td>
                <td width="200px">Code</td>
                <td width="300px">Prix</td>
                <td width="300px">Etat</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="table__pagination"></div>
      </div>
      <button class="btn add">Ajouter</button>
    `;

    listQueryCode(code_confirms);
    add(recharge_codes);
    paginate();
    listenBtn();
    root.classList.remove("invisible");
  }, 300);
}

/**
 *
 * @return {void}
 */
export async function renderRechargeCode() {
  let data = await ajax(`${base_url}recharge_code/find_all`, "GET", null);
  data = JSON.parse(data);
  update(data);
}
