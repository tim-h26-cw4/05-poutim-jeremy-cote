import Icons from './utils/Icons.js';
import Chef from './Chef.js';
class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    //code ci dessous
    console.log('Main');
    const comps = document.querySelectorAll('.js-comp');
    for (let i = 0; i < comps.length; i++) {
      const comp = comps[i];
      new Chef(comp);
    }
  }
}
new Main();
