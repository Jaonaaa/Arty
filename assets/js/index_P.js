import { handleLogAll } from "./P/Login_.js";

window.addEventListener("load", () => {
  handleLogAll();
});

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
