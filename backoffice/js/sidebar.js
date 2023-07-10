import { renderMealCategory } from "../pages/meal_category.js";
import { renderRechargeCode } from "../pages/recharge_code.js";
import { renderSport } from "../pages/sport.js";

const sidebarToggler = document.querySelector(".navbar__toggle");
const sidebar = document.querySelector(".sidebar");
const items = sidebar.querySelectorAll(".sidebar__item");

/**
 *
 * @return {void}
 */
function resetSidebarItems() {
  let sidebarItems = document.querySelectorAll(".sidebar__item");
  sidebarItems.forEach((item) => {
    item.classList.remove("active");
  });
  sidebarToggler.classList.remove("active");
  sidebar.classList.remove("active");
  sidebarOut();
}

let sport = document.getElementById("sport__item");
sport.addEventListener("click", () => {
  resetSidebarItems();
  sport.classList.add("active");
  renderSport();
});

let code = document.getElementById("code__item");
code.addEventListener("click", () => {
  resetSidebarItems();
  code.classList.add("active");
  renderRechargeCode();
});

let typeAliment = document.getElementById("type__aliment__item");
typeAliment.addEventListener("click", () => {
  resetSidebarItems();
  typeAliment.classList.add("active");
  renderMealCategory();
});

/**
 *
 * @return {void}
 */
function sidebarIn() {
  let timeline = anime.timeline({
    easing: "easeInOutQuad",
  });
  timeline.add({
    targets: sidebar,
    translateX: 0,
    duration: 300,
  });
  timeline.add({
    targets: items,
    opacity: [0, 1],
    delay: (element, index) => (index + 1) * 100,
    duration: 300,
  });
}

/**
 *
 * @return {void}
 */
function sidebarOut() {
  let timeline = anime.timeline({
    easing: "easeInOutQuad",
  });
  timeline.add({
    targets: items,
    opacity: [1, 0],
    delay: (element, index) => (index + 1) * 100,
    duration: 300,
  });
  timeline.add({
    targets: sidebar,
    translateX: -300,
    duration: 300,
  });
}

/**
 *
 * @return {void}
 */
function toggleSidebar() {
  sidebarToggler.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebar.classList.contains("active") ? sidebarIn() : sidebarOut();
}

sidebarToggler.addEventListener("click", toggleSidebar);
