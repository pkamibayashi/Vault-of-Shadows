export function charSelection() {
  const container = document.createElement("main");

  const template = `<h1>Choose Your Hero!</h1>
  
        <div id="imgs">
          <div>
            <a href="#warrior"
              ><img class="ImgMainMenu" id="warrior" src="./images/warrior.png" alt=""
            /></a>
          </div>
          <div>
            <a href="#wizard"
              ><img class="ImgMainMenu" id="wizard" src="./images/wizard.png" alt=""
            /></a>
          </div>
          <div>
            <a href="#archer"
              ><img class="ImgMainMenu" id="archer" src="./images/archer.png" alt=""
            /></a>
          </div>
        </div>
       
        <a href="#atributo" id='selectCharacter'>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> SELECT CHARACTER </span>
        </a>`;

  container.innerHTML = template;

  return container;
}
