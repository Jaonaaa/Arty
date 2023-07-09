import { handleLogAll } from "./P/Login_.js";

let container = document
  .getElementById("root")
  .querySelector(".container_login");
let loader = document.getElementById("loader_page");
window.addEventListener("load", () => {
  loader.style.opacity = 0;
  loader.style.transform = "translateY(-10rem)";
  setTimeout(() => {
    container.removeAttribute("style");
    handleLogAll();
  }, 200);
  setTimeout(() => {
    loader.parentElement.removeChild(loader);
  }, 300);
});

// STYLE
var styleHider = new CSSStyleSheet();
styleHider.replaceSync(`
#hider {
  background-color: rgba(0, 0, 0, 0.20);
  z-index: 6;
  transition: all 0.2s ease-in-out;
  width: 100%;
  backdrop-filter:blur(1px);
  position: absolute;
  top: 0;
}
`);
// add the style to the document
document.adoptedStyleSheets = [styleHider];
