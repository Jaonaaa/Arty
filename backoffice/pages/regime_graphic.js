import { ajax, base_url } from "../js/ajax.js";
import { LineData, LineGraph } from "../js/graphic.js";
import { Meal } from "../models/meal.js";
import { add } from "./meal.js";
import { renderRegime } from "./regime.js";

/**
 *
 * @param {*[]} price_graphes
 * @return {void}
 */
function dailyGraph(price_graphes) {
  let canvas = document.querySelector(".regime__line__graph canvas");
  let labels = price_graphes.map((element) => element.n_jour);
  let datas = price_graphes.map((element) => element.prix);
  let lineGraph = new LineGraph(labels, [
    new LineData("Prix quotidien des repas", datas, false, "#60a3bc", "", 2),
  ]);
  lineGraph.drawGraph(canvas);
}

/**
 *
 * @return {void}
 */
function back() {
  let back = document.querySelector(".back");
  back.addEventListener("click", renderRegime);
}

/**
 *
 * @param {*[]} price_graphes
 * @param {Meal[]} meals
 * @return {void}
 */
function update(price_graphes, meals) {
  console.log(meals);
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(() => {
    root.innerHTML = `
      <img src="${base_url}assets/img/arrow_back.png" class="back" />
      <h1 class="title">Graphique des prix quotidiens des repas</h1>
      <div class="regime__line__graph">
        <canvas></canvas>
      </div>
      <h1 class="title">Liste des plats dans le regime</h1>
      <div class="meal__container"></div>
    `;

    dailyGraph(price_graphes);
    add(meals);
    back();

    root.classList.remove("invisible");
  }, 300);
}

/**
 *
 * @param {string} id_regime
 * @return {void}
 */
export async function renderRegimeGraph(id_regime) {
  let price_graphes = await ajax(
    `${base_url}regime/price_day?regime=${id_regime}`
  );
  price_graphes = JSON.parse(price_graphes);

  let meals = await ajax(`${base_url}regime/find_meals?regime=${id_regime}`);
  meals = JSON.parse(meals);

  update(price_graphes, meals);
}
