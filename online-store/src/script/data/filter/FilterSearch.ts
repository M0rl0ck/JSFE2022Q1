export default class FilterSearch {
  element: HTMLElement;
  constructor() {
    this.element = this.createEl();
  }

  private createEl(): HTMLElement {
    const element: HTMLElement = document.createElement("div");
    element.className = 'filterConteiner__group';


    return element;
  }
}
