import Poutine from './Poutine.js';
export default class Chef {
  constructor(comp) {
    this.element = comp;
    this.menu = [];
    this.container = this.element.querySelector('.js-texte');
    this.init();
  }
  init() {
    console.log('Chef');
    const poutines = this.element.querySelectorAll('.js-typesPoutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      //console.log(poutine);
      this.menu.push(poutine);
      //console.log(this.menu);
      new Poutine(poutine);
    }
    const btn = this.element.querySelector('.js-btn');
    btn.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {
    this.container.innerText = '';
    console.log('sendorder');
    const allPoutines = this.element.querySelectorAll(
      `[data-component='is-active']`,
    );
    const nbPoutine = allPoutines.length;
    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) :  ${nbPoutine}`;
    this.container.appendChild(p);
  }
}
