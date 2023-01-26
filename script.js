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
        const points = document.querySelectorAll(".points");
        const btnAdd = document.querySelectorAll(".add");
        const btnLess = document.querySelectorAll(".remove");
        const availablePoints = document.getElementById("total");

        for (let i = 0; i < btnAdd.length; i++) {
          btnAdd[i].addEventListener("click", () => {
            points[i].innerText++;
            availablePoints.innerText--;
            if (availablePoints.innerText < 0) {
              points[i].innerText--;
              availablePoints.innerText++;
            }
          });

          btnLess[i].addEventListener("click", () => {
            points[i].innerText--;
            availablePoints.innerText++;
            if (points[i].innerText < 0) {
              points[i].innerText++;
              availablePoints.innerText--;
            }
          });
        }

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
