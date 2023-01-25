export default () => {
  const container = document.createElement("main");
  const template = `
    <main> 
      <div id='CustomCharacter'>
      <h1>Por gentileza, distribua os pontos.</h1>
      
      <ul>
        <li>VIDA:</li>
        <li>FORÇA:</li>
        <li>HABILIDADE:</li>
        <li>ARMADURA:</li>
      </ul>
      
      <h2>PONTOS:<span> 0</span></h2>
      <h2>Qual é seu nome, heroi?<h2>
        <input type='text' placeholder='Digite seu nome:'></input>
        </div>
        <div id='heroPic'>
          <img id="" src="" alt=""/>
        </div>
    
    
    `;

  container.appendChild(template);
  return template;
};
