import { charSelection } from "./paginas/CharSelection/index.js";
import { propertiesScreen } from "./paginas/propertiesScreen/index.js";
import { addAndRemovePoints } from "./functions/addAndRemovePoints.js";
import { board } from "./paginas/board/index.js";
import { player, Goblin } from "./player/playerProperties/PlayerClass.js";

const body = document.querySelector("#body");

// Quando a pagina carregar, automaticamente a pagina é renderizda com o conteudo de
//charSelection, que seria a seleção de personagens
// Em seguida, a function "init()" é invocada.
window.addEventListener("load", () => {
  body.appendChild(charSelection());
  init();
});

// essa função ficara olhando para window, mais especificamente, no campo de
//URL da pagina, onde a cada mudança de HASH do mesmo, ele ira disparar
// uma mudança para cada caso.
// Estou trabalhando as funcoes de cada janela da aplicacao dentro dessa function init
// Aqui, é onde irei aplicar as funcoes para cada pagina, e o que cada pagina fara
// estou importando essas functions de outros modulos JS, para que assim,
//as coisas fiquem mais legiveis.
const init = () => {
  let hero;
  function HeroDetails(detail) {
    hero = detail;
  }
  window.addEventListener("hashchange", () => {
    switch (window.location.hash) {
      case " ":
        body.appendChild(charSelection());
        break;
      case "#atributo":
        body.innerHTML = " ";
        body.appendChild(propertiesScreen());
        addAndRemovePoints();
        const saveButton = document.querySelector(".save");
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
          HeroDetails(hero);
        });

        break;
      case "#board":
        body.innerHTML = " ";
        body.appendChild(board());
        console.log(hero);

        break;
    }
  });
};
