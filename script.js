import home from "./pages/home/index.js";
import attributesMenu from "./pages/attributesMenu/index.js";

const init = () => {
  window.addEventListener("hashchange", () => {
    switch (window.location.hash) {
      case "#atributo":
        body.appendChild(attributesMenu());
        break;

      default:
        break;
    }
  });
};
window.addEventListener("load", () => {
  body.appendChild(home());
  init();
});
