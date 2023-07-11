import { ajax, base_url } from "../js/ajax.js";
import { BarData, BarGraph } from "../js/graphic.js";

/**
 *
 * @param {*[]} regimes
 * @return {void}
 */
function regimeGraph(regimes) {
  let canvas = document.querySelector(".regime__graph canvas");
  let barGraph = new BarGraph(
    regimes.map((regime) => regime.nom),
    [
      new BarData(
        "Prix",
        regimes.map((regime) => regime.prix),
        ["#30336b"],
        [],
        0
      ),
    ]
  );
  barGraph.drawGraph(canvas);
}

/**
 *
 * @return {void}
 */
function update() {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(async () => {
    root.innerHTML = `
      <h1 class="title">Liste des regimes</h1>
      <div class="regime__graph">
        <canvas></canvas>
      </div>
    `;

    let data = await ajax(`${base_url}regime/price_regime`, "GET", null);
    data = JSON.parse(data);
    regimeGraph(data);

    root.classList.remove("invisible");
  }, 300);
}

/**
 *
 * @return {void}
 */
export function renderDashboard() {
  update();
}
