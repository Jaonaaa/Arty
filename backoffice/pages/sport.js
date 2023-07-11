import { renderSportForm } from "../form/sport.js";
import { ajax, base_url } from "../js/ajax.js";
import { paginate } from "../js/pagination.js";
import { Recharge_code } from "../models/recharge_code.js";
import { Sport } from "../models/sport.js";

/**
 *
 * @param {Sport} sport
 * @return {HTMLTableRowElement}
 */
function createRow(sport) {
  let response = document.createElement("tr");

  response.innerHTML = `
    <td width="200px">${sport.id_sport}</td>
    <td width="400px">${sport.nom}</td>
    <td width="300px">${sport.poids_quotidien} kg</td>
  `;

  return response;
}

/**
 *
 * @param {Sport[]} sports
 * @return {void}
 */
function add(sports) {
  let tbody = document.querySelector("table tbody");
  sports.forEach((sport) => {
    tbody.appendChild(createRow(sport));
  });
}

/**
 *
 * @return {void}
 */
function listenBtn() {
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", renderSportForm);
}

/**
 *
 * @param {Recharge_code[]} recharge_codes
 * @return {void}
 */
function update(recharge_codes) {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(() => {
    root.innerHTML = `
      <div class="table">
        <div class="table__container">
          <table>
            <thead>
              <tr>
                <td width="200px">Id</td>
                <td width="400px">Code</td>
                <td width="300px">Poids quotidien</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="table__pagination"></div>
      </div>
      <button class="btn add">Ajouter</button>
    `;

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
export async function renderSport() {
  let data = await ajax(`${base_url}sport/find_all`, "GET", null);
  data = JSON.parse(data);
  update(data);
}
