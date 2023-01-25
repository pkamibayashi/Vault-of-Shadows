export default () => {
  const container = document.createElement("main");
  const template = `<h1>Choose Your Hero!</h1>
    <div id="imgs">
      <div>
        <a href="#warrior"
          ><img id="warrior" src="./images/warrior.png" alt=""
        /></a>
      </div>
      <div>
        <a href="#wizard"
          ><img id="wizard" src="./images/wizard.png" alt=""
        /></a>
      </div>
      <div>
        <a href="#archer"
          ><img id="archer" src="./images/archer.png" alt=""
        /></a>
      </div>
    </div>
    <button>
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front text"> Click me </span>
    </button>`;
  container.innerHTML(template);
  return container;
};
