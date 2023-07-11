import { ajax, base_url } from "../js/ajax.js";
import { Meal } from "../models/meal.js";

/**
 *
 * @param {number} nDay
 * @param {Meal[]} breacFast
 * @param {Meal[]} lunch
 * @param {Meal[]} diner
 */
function mealDay(nDay, breacFast, lunch, diner) {
  let response = document.createElement("div");
  response.classList.add("meal__day");

  response.innerHTML = `
    <h1 class="title">Jour ${nDay}</h1>
    <div class="input__container">
      <label>Petit dejeuner</label>
      <div class="select__container">
        <select name="petit_dejeuner_${nDay}" id="petit_dejeuner_${nDay}"></select>
      </div>
    </div>
    <div class="input__container">
      <label>Dejeuner</label>
      <div class="select__container">
        <select name="dejeuner_${nDay}" id="dejeuner_${nDay}"></select>
      </div>
    </div>
    <div class="input__container">
      <label>Diner</label>
      <div class="select__container">
        <select name="diner_${nDay}" id="diner_${nDay}"></select>
      </div>
    </div>
  `;

  let bfSelect = response.querySelector(`#petit_dejeuner_${nDay}`);
  breacFast.forEach((bf) => {
    let option = document.createElement("option");
    option.value = bf.id_repas;
    option.innerHTML = bf.nom;
    bfSelect.appendChild(option);
  });

  let lunchSelect = response.querySelector(`#dejeuner_${nDay}`);
  lunch.forEach((lc) => {
    let option = document.createElement("option");
    option.value = lc.id_repas;
    option.innerHTML = lc.nom;
    lunchSelect.appendChild(option);
  });

  let dinerSelect = response.querySelector(`#diner_${nDay}`);
  diner.forEach((dn) => {
    let option = document.createElement("option");
    option.value = dn.id_repas;
    option.innerHTML = dn.nom;
    dinerSelect.appendChild(option);
  });

  return response;
}

function initBigForm() {
  let form = document.querySelector(".form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nom = document.getElementById("nom").value;
    let duree = document.getElementById("duree").value;

    updateAfterSendData(nom, duree);
  });
}

/**
 *
 * @param {string} nom
 * @param {number} duree
 */
function updateAfterSendData(nom, duree) {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(async () => {
    root.innerHTML = `
      <form class="form"></form>
    `;

    let form = root.querySelector(".form");
    form.innerHTML = `
      <h1 class="form__title">${nom} pour une duree de ${duree} jours</h1>
      <input type="hidden" name="nom" value="${nom}" />
      <input type="hidden" name="duree" value="${duree}" />
      <div class="meal__container"></div>
      <input type="submit" class="btn confirm" value="Valider" />
    `;

    let breakfast = await ajax(`${base_url}meal/breakfast`, "GET", null);
    let lunch = await ajax(`${base_url}meal/lunch`, "GET", null);
    let diner = await ajax(`${base_url}meal/diner`, "GET", null);

    breakfast = JSON.parse(breakfast);
    lunch = JSON.parse(lunch);
    diner = JSON.parse(diner);

    let mealContainer = root.querySelector(".meal__container");
    for (let i = 1; i <= duree; i++) {
      mealContainer.appendChild(mealDay(i, breakfast, lunch, diner));
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      let data = new FormData(form);
      let response = await ajax(`${base_url}regime/insert`, "POST", data);
      console.log(response);
    });

    root.classList.remove("invisible");
  }, 300);
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
        <h1 class="form__title">Creer un regime</h1>
        <div class="input__container">
          <label for="nom">Nom</label>
          <input type="text" id="nom" name="nom" autocomplete="off" required />
        </div>
        <div class="input__container">
          <label for="duree">Duree (en jours)</label>
          <input type="number" id="duree" name="duree" autocomplete="off" required />
        </div>
        <input type="submit" class="btn confirm" value="Valider" />
      </form>
    `;

    root.classList.remove("invisible");
    initBigForm();
  }, 300);
}

/**
 *
 * @return {void}
 */
export function renderRegimeForm() {
  update();
}
