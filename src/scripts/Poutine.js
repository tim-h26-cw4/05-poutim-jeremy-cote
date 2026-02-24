export default class Poutine {
  constructor(poutine) {
    this.element = poutine;
    this.sortes = this.element.querySelectorAll('.js-poutineSorte');
    this.selectedType = '';
    this.init();
  }
  init() {
    console.log('Poutine');
    //console.log(this.element);
    //console.log(this.sortes);
    for (let i = 0; i < this.sortes.length; i++) {
      const sorte = this.sortes[i];
      sorte.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    console.log('selectType');
    for (let i = 0; i < this.sortes.length; i++) {
      const btn = this.sortes[i];
      btn.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');
    this.selectedType = event.currentTarget.innerText;
    console.log(this.selectedType);
    this.updatePhoto();
  }
  updatePhoto() {
    const imgPoutine = this.element.querySelector('.js-pimg');
    //console.log(imgPoutine);
    imgPoutine.classList.add('is-active');
    imgPoutine.setAttribute(`data-component`, 'is-active');
    imgPoutine.src = `assets/images/${this.selectedType}.png`;
  }
}
