import { ajax, base_url } from "../js/ajax.js";
import { renderRechargeCode } from "../pages/recharge_code.js";

/**
 *
 * @return {void}
 */
function sendForm() {
  let form = document.querySelector(".form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let code = document.getElementById("code").value;
    let price = document.getElementById("price").value;
    let response = await ajax(
      `${base_url}recharge_code/insert?code=${code}&prix=${price}`
    );
    if (response == 1) {
      renderRechargeCode();
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
        <h1 class="form__title">Inserer un code de recharge</h1>
        <div class="input__container">
          <label for="code">Code</label>
          <input autocomplete="off" id="code" type="number" name="code" required />
        </div>
        <div class="input__container">
          <label for="price">Prix</label>
          <input autocomplete="off" id="price" type="number" name="price" required />
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
export function renderRechargeCodeForm() {
  update();
}
