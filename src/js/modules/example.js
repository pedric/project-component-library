export default class Example {
  constructor(element) {
    this.width = element.offsetWidth;
    this.height = this.width / 2;

    // Get attribute
    let example = element.getAttribute('data-example');
    console.log('data-example:' + example)

    // Set attribute
    element.setAttribute('style', 'width:' + this.width + 'px;height:' + this.height + 'px;background-color:#eee;')
  }
}
