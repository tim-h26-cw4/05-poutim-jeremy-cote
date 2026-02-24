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
    }
    const btn = this.element.querySelector('.js-btn');
    btn.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {
    console.log('sendorder');
  }
}
