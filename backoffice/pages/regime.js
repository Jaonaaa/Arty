import { renderRegimeForm } from "../form/regime.js";
import { ajax, base_url } from "../js/ajax.js";
import { Regime } from "../models/regime.js";
import { renderRegimeGraph } from "./regime_graphic.js";

/**
 *
 * @param {Regime} regime
 * @return {HTMLDivElement}
 */
function regimeCard(regime) {
  let response = document.createElement("div");
  response.classList.add("regime__card");

  response.innerHTML = `
    <h1 class="title">${regime.nom}</h1>
    <p class="text">${regime.duree}</p>
    <p class="link">Cliquez pour plus de details</p>
  `;

  response.addEventListener("click", () => {
    renderRegimeGraph(regime.id_regime);
  });

  return response;
}

/**
 *
 * @param {Regime[]} regimes
 * @return {void}
 */
function add(regimes) {
  let container = document.querySelector(".regime__container");
  regimes.forEach((regime) => {
    container.appendChild(regimeCard(regime));
  });
}

/**
 *
 * @return {void}
 */
function listenBtn() {
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", renderRegimeForm);
}

/**
 *
 * @param {Regime[]} regimes
 * @return {void}
 */
function update(regimes) {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(() => {
    root.innerHTML = `
      <div class="regime__container"></div>
      <button class="btn add">Ajouter</button>
    `;

    add(regimes);
    root.classList.remove("invisible");
    listenBtn();
  }, 300);
}

/**
 *
 * @return {void}
 */
export async function renderRegime() {
  let data = await ajax(`${base_url}regime/find_all`, "GET", null);
  data = JSON.parse(data);
  update(data);
}
