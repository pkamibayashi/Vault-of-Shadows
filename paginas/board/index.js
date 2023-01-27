export function board() {
  const container = document.createElement("main");

  const template = `<h1>Battle Found!!</h1>
  <div id='battleField'>
      <div id="monsterCard">
        <img id="goblin" src="./images/goblin.png" alt="goblin"/>
        <h3 class='introLuta'>Você esta enfrentando um: Wild Goblin!!</h3>
      </div>
      <div id="heroCard">
        <ul id='actions'>
          <li id='attack'><button id='attackBtn' for='attack'>ATACAR!</button></li>
          <li id='Defender'><button id='DefenderBtn' for='Defender'>DEFENDER!</button></li>
        </ul>
      </div>
      <div id="actReturn">
        <span id='resposta'></span>
      </div>
  </div>
    
          `;

  container.innerHTML = template;

  return container;
}
