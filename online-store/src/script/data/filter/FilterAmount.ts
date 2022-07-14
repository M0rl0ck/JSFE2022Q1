import Manufacturers from "./filterAmount/Manufacturers";

export default class filterAmount {
filterMfrs: Manufacturers;
element: HTMLElement;
constructor() {
  this.filterMfrs = new Manufacturers();
  this.element = this.createEl();
}
private createEl(): HTMLElement {
const element = document.createElement('div');
element.className = 'filtersAmount';
element.append(this.filterMfrs.eiement);

return element;
}
}