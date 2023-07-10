const COUNT = 10;
/**
 *
 * @return {number}
 */
function countPages() {
  const table = document.querySelector("table");
  const count = table.querySelectorAll("tbody tr").length;
  let nPages = parseInt(count / COUNT);
  if (count * nPages == COUNT) {
    return nPages;
  }
  nPages += 1;
  return nPages;
}

/**
 *
 * @param {number} value
 * @return {HTMLDivElement}
 */
function renderPage(value) {
  let response = document.createElement("div");
  response.classList.add("table__pagination__value");
  value == 1
    ? response.classList.add("active")
    : response.classList.remove("active");
  response.innerHTML = value;

  response.addEventListener("click", () => {
    updateTable(value);
    document
      .querySelectorAll(".table__pagination__value")
      .forEach((element) => {
        element.classList.remove("active");
      });
    response.classList.add("active");
  });

  return response;
}

/**
 *
 * @return {void}
 */
function resetActiveRows() {
  let rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => row.classList.remove("active"));
}

/**
 *
 * @param {number} number
 * @return {void}
 */
function updateTable(number) {
  let begin = `:nth-child(n + ${(number - 1) * COUNT + 1})`;
  let end = `:nth-child(-n + ${number * COUNT})`;
  document.querySelector("tbody").classList.add("hidden");
  window.setTimeout(() => {
    resetActiveRows();
    let actives = document.querySelectorAll(`tbody tr${begin}${end}`);
    actives.forEach((active) => active.classList.add("active"));
    document.querySelector("tbody").classList.remove("hidden");
  }, 200);
}

/**
 *
 * @returns {void}
 */
function renderPagination() {
  const count = countPages();
  for (let i = 1; i <= count; i++) {
    document.querySelector(".table__pagination").appendChild(renderPage(i));
  }
}

export function paginate() {
  updateTable(1);
  renderPagination();
}

paginate();
