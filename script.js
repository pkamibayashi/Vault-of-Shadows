import home from "./page folder/home/index.js";

const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.appendChild(home());
});
