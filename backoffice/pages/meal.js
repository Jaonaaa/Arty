import { renderMealForm } from "../form/meal.js";
import { ajax, base_url } from "../js/ajax.js";
import { Meal } from "../models/meal.js";

/**
 *
 * @param {Meal} meal
 * @return {HTMLDivElement}
 */
function createMealCard(meal) {
  let response = document.createElement("div");
  response.classList.add("meal__card");

  response.innerHTML = `
    <div class="image__container">
      <img class="meal__image" src="${base_url}uploads/${meal.photo}" alt="Photo de ${meal.nom}" />
    </div>
    <h1 class="meal__name">${meal.nom}</h1>
    <p class="meal__text">${meal.calorie} calories</p>
    <p class="meal__text">${meal.prix} Ar</p>
  `;

  return response;
}

/**
 *
 * @param {Meal[]} meals
 */
function add(meals) {
  let container = document.querySelector(".meal__container");
  meals.forEach((meal) => {
    container.appendChild(createMealCard(meal));
  });
}

/**
 *
 * @return {void}
 */
function listenBtn() {
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", renderMealForm);
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
      <div class="meal__container"></div>
      <button class="btn add">Ajouter</button>
    `;

    root.classList.remove("invisible");
    add(meals);
    listenBtn();
  }, 300);
}

/**
 *
 * @return {void}
 */
export async function renderMeal() {
  let meals = await ajax(`${base_url}meal/find_all`, "GET", null);
  meals = JSON.parse(meals);
  update(meals);
}
