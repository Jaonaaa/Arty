import { createSidePopUp } from "../../assets/js/P/PopUp.js";
import { ajax, base_url } from "../js/ajax.js";
import { Meal_category } from "../models/meal_category.js";
import { renderMeal } from "../pages/meal.js";

/**
 *
 * @param {Meal_category} meal_category
 * @return {HTMLOptionElement}
 */
function createOption(meal_category) {
  let response = document.createElement("option");
  response.value = meal_category.id_type_repas;

  response.innerHTML = meal_category.nom;

  return response;
}

/**
 *
 * @param {Meal_category[]} meal_categories
 */
function renderOptions(meal_categories) {
  let select = document.querySelector("select");
  meal_categories.forEach((meal_category) => {
    select.appendChild(createOption(meal_category));
  });
}

/**
 *
 * @return {void}
 */
function sendForm() {
  let form = document.querySelector(".form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let data = new FormData(form);
    let response = await ajax(`${base_url}meal/insert`, "POST", data);
    if (response == 1) {
      renderMeal();
    } else {
      createSidePopUp(response, "error");
    }
  });
}

/**
 *
 * @return {void}
 */
function back() {
  let back = document.querySelector(".back");
  back.addEventListener("click", renderMeal);
}

/**
 *
 * @return {void}
 */
async function update() {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  let data = await ajax(`${base_url}meal_category/find_all`, "GET", null);
  data = JSON.parse(data);

  window.setTimeout(() => {
    root.innerHTML = `
      <img src="${base_url}assets/img/arrow_back.png" class="back" />
      <form class="form">
        <h1 class="form__title">Ajouter un nouveau plat</h1>
        <div class="input__container">
          <label for="nom">Nom</label>
          <input name="nom" id="nom" autocomplete="off" type="text" />
        </div>
        <div class="input__container">
          <label for="calories">Nombre de calories</label>
          <input name="calorie" id="calories" autocomplete="off" type="number" />
        </div>
        <div class="input__container">
          <label for="prix">Prix</label>
          <input name="prix" id="prix" autocomplete="off" type="number" />
        </div>
        <div class="input__container">
          <label>Type</label>
          <div class="select__container">
            <select name="type_repas" id="type_repas"></select>
          </div>
        </div>
        <div class="input__container">
          <label class="for__file" for="file">Photo du repas</label>
          <input id="file" name="photo" type="file" required />
        </div>
        <input type="submit" value="Ajouter" class="btn confirm" />
      </form>
    `;

    renderOptions(data);
    back();
    sendForm();

    root.classList.remove("invisible");
  }, 300);
}

/**
 *
 * @return {void}
 */
export function renderMealForm() {
  update();
}
