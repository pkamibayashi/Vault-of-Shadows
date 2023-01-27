import { player } from "../player/playerProperties/PlayerClass.js";

export function addAndRemovePoints() {
  const points = document.querySelectorAll(".points");
  const btnAdd = document.querySelectorAll(".add");
  const btnLess = document.querySelectorAll(".remove");
  const saveButton = document.querySelector(".save");
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
  let nome = document.getElementById("nome");
  let pv = document.getElementById("pv");
  let str = document.getElementById("str");
  let ap = document.getElementById("ap");
  let armor = document.getElementById("armor");

  saveButton.addEventListener("click", () => {
    const hero = new player(
      nome.value,
      pv.innerText,
      str.innerText,
      ap.innerText,
      armor.innerText
    );
    console.log(hero.nome, hero.pv, hero.str, hero.ap, hero.armor);
  });
}
