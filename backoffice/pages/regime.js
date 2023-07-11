import { renderRegimeForm } from "../form/regime.js";
import { ajax, base_url } from "../js/ajax.js";
import { Meal } from "../models/meal.js";

ajax(`${base_url}regime/find_all`, "GET", null).then(console.log);

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
 * @param {Meal[]} meals
 * @return {void}
 */
function update(meals) {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(() => {
    root.innerHTML = `
      <div class="regime__container"></div>
      <button class="btn add">Ajouter</button>
    `;

    root.classList.remove("invisible");
    listenBtn();
  }, 300);
}

/**
 *
 * @return {void}
 */
export async function renderRegime() {
  update();
}
