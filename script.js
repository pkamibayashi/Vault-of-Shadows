import { charSelection } from "./paginas/CharSelection/index.js";
import { propertiesScreen } from "./paginas/propertiesScreen/index.js";

const body = document.querySelector("#body");

const init = () => {
  window.addEventListener("hashchange", () => {
    switch (window.location.hash) {
      case " ":
        body.appendChild(charSelection());
        break;
      case "#atributo":
        body.innerHTML = " ";
        body.appendChild(propertiesScreen());
        break;
      default:
        break;
    }
  });
};

window.addEventListener("load", () => {
  body.appendChild(charSelection());
  init();
});
