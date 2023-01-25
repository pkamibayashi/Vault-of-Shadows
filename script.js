import home from './pages/home/index.js';
import attributesMenu from './pages/attributesMenu/index.js';

const body = document.querySelector('#body');

const init = () => {
  if (window.location.hash === ' ') {
    body.appendChild(home());
  }
  if (window.location.hash === '#atributo') {
    body.innerHTML = ' ';
    body.appendChild(attributesMenu());
    console.log('eu sou atributo');
  }
};

window.addEventListener('load', () => {
  body.appendChild(home());
  init();
});
