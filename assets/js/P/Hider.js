import { removeMiddlePopUp } from "./PopUp.js";

export function createHider() {
  let hiderExistant = document.getElementById("hider");
  if (hiderExistant != undefined) {
    return 0;
  }
  let hider = document.createElement("div");
  hider.setAttribute("id", "hider");
  setUpHider(hider);
  document.body.appendChild(hider);
}

function setUpHider(hider) {
  let heightMax = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  hider.style.height = heightMax + "px";
  resizeHider(hider);
  hider.addEventListener("click", () => {
    hider.style.opacity = 0;
    removeMiddlePopUp();
    setTimeout(() => {
      document.body.removeChild(hider);
    }, 200);
  });
}

export function removeHider() {
  let hider = document.getElementById("hider");
  if (hider != undefined) {
    hider.style.opacity = 0;
    removeMiddlePopUp();
    setTimeout(() => {
      document.body.removeChild(hider);
    }, 200);
  }
}

function resizeHider(hider) {
  window.addEventListener("resize", () => {
    let heightMax = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    hider.style.height = heightMax + "px";
  });
  window.addEventListener("scroll", () => {
    let heightMax = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    hider.style.height = heightMax + "px";
  });
}
