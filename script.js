import { charSelection } from './paginas/CharSelection/index.js';
import { propertiesScreen } from './paginas/propertiesScreen/index.js';
import { addAndRemovePoints } from './functions/addAndRemovePoints.js';
import { board } from './paginas/board/index.js';

const body = document.querySelector('#body');

class Player {
  constructor(nome, pv, str, ap, armor) {
    this.nome = nome;
    this.pv = pv;
    this.str = str;
    this.ap = ap;
    this.armor = armor;
  }

  attack(target) {
    target.pv = target.pv - this.str;
    return `${this.nome} causou ${this.str} de dano e a vida atual do inimigo é ${target.pv}`;
  }

  receiveDamage(damage) {
    this.pv = this.pv - damage;
    return `${this.nome} recebeu ${damage} de dano e sua vida atual é ${this.pv}`;
  }
}

class Goblin extends Player {
  constructor(pv, str, ap, armor) {
    super(pv, str, ap, armor);
    this.nome = 'Wild Goblin';
  }

  attack(target) {
    let damage = this.str + this.ap;
    target.pv = target.pv - damage;
    return `${this.nome} atacou o jogador e o causou ${damage} de dano, a vida do inimigo agora é ${target.pv}`;
  }

  receiveDamage(damage) {
    let totalDamage = damage - this.armor;
    this.pv = this.pv - totalDamage;
    return `${this.nome} recebeu ${totalDamage} de dano, sua vida atual é ${this.pv}`;
  }
}

// Quando a pagina carregar, automaticamente a pagina é renderizda com o conteudo de
//charSelection, que seria a seleção de personagens
// Em seguida, a function "init()" é invocada.
window.addEventListener('load', () => {
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

  window.addEventListener('hashchange', () => {
    switch (window.location.hash) {
      case ' ':
        body.appendChild(charSelection());

        break;
      case '#atributo':
        body.innerHTML = ' ';
        body.appendChild(propertiesScreen());
        addAndRemovePoints();
        const saveButton = document.querySelector('.save');
        let nome = document.getElementById('nome');
        let pv = document.getElementById('pv');
        let str = document.getElementById('str');
        let ap = document.getElementById('ap');
        let armor = document.getElementById('armor');

        saveButton.addEventListener('click', () => {
          const hero = new Player(
            nome.value,
            pv.innerText,
            str.innerText,
            ap.innerText,
            armor.innerText,
          );
          HeroDetails(hero);
        });

        break;
      case '#board':
        body.innerHTML = ' ';
        body.appendChild(board());
        const atacar = document.getElementById('attackBtn');
        const defender = document.getElementById('DefenderBtn');
        const resposta = document.getElementById('resposta');
        const goblin = new Player('Wild Goblin', 30, 20, 47, 5);

        atacar.addEventListener('click', () => {
          alert(hero.attack(goblin));
        });

        break;
    }
  });
};
