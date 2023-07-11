import { ajax, base_url } from "../js/ajax.js";
import { paginate } from "../js/pagination.js";
import { Meal_category } from "../models/meal_category.js";

/**
 *
 * @param {Meal_category} meal_category
 * @return {HTMLTableRowElement}
 */
function createRow(meal_category) {
  let response = document.createElement("tr");

  response.innerHTML = `
    <td width="200px">${meal_category.id_type_repas}</td>
    <td width="400px">${meal_category.nom}</td>
  `;

  return response;
}

/**
 *
 * @param {Meal_category[]} meal_categories
 * @return {void}
 */
function add(meal_categories) {
  let tbody = document.querySelector("table tbody");
  meal_categories.forEach((meal_category) => {
    tbody.appendChild(createRow(meal_category));
  });
}

/**
 *
 * @param {Meal_category[]} meal_categories
 * @return {void}
 */
function update(meal_categories) {
  let root = document.getElementById("root");
  root.classList.add("invisible");

  window.setTimeout(() => {
    root.innerHTML = `
      <div class="table">
        <div class="table__container">
          <table>
            <thead>
              <tr>
                <td style="width: 200px">Id</td>
                <td style="width: 400px">Nom</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="table__pagination"></div>
      </div>
    `;

    add(meal_categories);
    paginate();
    root.classList.remove("invisible");
  }, 300);
}

/**
 *
 * @return {void}
 */
export async function renderMealCategory() {
  let data = await ajax(`${base_url}meal_category/find_all`, "GET", null);
  data = JSON.parse(data);
  update(data);
}
