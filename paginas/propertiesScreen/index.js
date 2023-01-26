export function propertiesScreen() {
  const container = document.createElement("main");
  const template = `
        <div id='CustomCharacter'>
          <h1>Por gentileza, distribua os pontos.</h1>
        
        <ul>
          <li>VIDA:<span id="quantidade">0</span><button id="test" > + </button></li>
          <li>FORÇA:<span class="quantity">0</span><button > + </button></li>
          <li>HABILIDADE:<span class="quantity">0</span><button > + </button></li>
          <li>ARMADURA:<span class="quantity">0</span><button > + </button></li>
        </ul>
        
        <h2>PONTOS:<span class="total">30</span></h2>
        <h2>Qual é seu nome, heroi?<h2>
          <input id="nome" type='text' placeholder='Digite seu nome:'></input>
        </div>
        <a href="" id='selectCharacter'>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> Return </span>
        </a>
          `;

  container.innerHTML = template;
  container;

  const btn = document.getElementById("test");
  console.log(btn);

  return container;
}
