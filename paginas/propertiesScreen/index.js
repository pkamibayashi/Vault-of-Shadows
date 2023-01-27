export function propertiesScreen() {
  const container = document.createElement("main");
  const template = `
        <div id='CustomCharacter'>
          <h1 id='titulo'>Por gentileza, distribua os pontos.</h1>
        
        <ul id="pontos">
          <li>VIDA:<span id="pv" class="points">0</span><button for="pv" class="add" > + </button> <button for="pv" class="remove" > - </button>
          </li>
          <li>FORÇA:<span id="str" class="points">0</span><button for="str" class="add" > + </button> <button for="str" class="remove" > - </button></li>
          <li>HABILIDADE:<span id="ap" class="points">0</span><button for="ap" class="add" > + </button> <button for="ap" class="remove" > - </button></li>
          <li>ARMADURA:<span id="armor"  class="points">0</span><button for="armor" class="add" > + </button> <button for="armor" class="remove" > - </button></li>
        </ul>
        
        <h2>PONTOS:<span id="total">30</span></h2>
        <h2>Qual é seu nome, heroi?<h2>
          <input id="nome" type='text' placeholder='Digite seu nome:'></input>
        </div>
        <div id="botoes">
        <a href="" id='selectCharacter'>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> Return </span>
        </a>
        
        <a href="#board" id='selectCharacter'>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> PLAY! </span>
        </a>

        <a href="#/" id='selectCharacter' class="save">
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> SAVE! </span>
        </a>
        </div>
          `;

  container.innerHTML = template;

  return container;
}
