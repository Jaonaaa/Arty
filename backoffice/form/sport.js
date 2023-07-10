import { ajax, base_url } from "../js/ajax.js";
import { renderSport } from "../pages/sport.js";

/**
 *
 * @return {void}
 */
function sendForm() {
  let form = document.querySelector(".form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let poids_quotidien = document.getElementById("poids_quotidien").value;
    let response = await ajax(
      `${base_url}sport/insert?name=${name}&poids_quotidien=${poids_quotidien}`
    );
    if (response == 1) {
      renderSport();
    }
  });
}

/**
 *
 * @return {void}
 */
function update() {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(() => {
    root.innerHTML = `
      <form class="form">
        <h1 class="form__title">Inserer un sport</h1>
        <div class="input__container">
          <label for="name">Nom</label>
          <input autocomplete="off" id="name" type="text" name="name" required />
        </div>
        <div class="input__container">
          <label for="poids_quotidien">Poids quotidienne</label>
          <input autocomplete="off" id="poids_quotidien" type="text" name="poids_quotidien" required />
        </div>
        <input type="submit" class="btn confirm" value="Valider" />
      </form>
    `;

    root.classList.remove("invisible");
    sendForm();
  }, 300);
}

/**
 *
 * @return {void}
 */
export function renderSportForm() {
  update();
}
