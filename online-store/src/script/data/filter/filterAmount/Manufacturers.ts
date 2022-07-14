import { MANUFACTURERS } from "../../constants";
import Mfr from "./Mfr";

export default class Manufacturers {
  mfrs: Mfr[] = [];
  eiement: HTMLElement;
  constructor() {
    MANUFACTURERS.map((item) => {
      const el = new Mfr(item);
      this.mfrs.push(el);
    });
    this.eiement = this.createEl();
  }

  private createEl(): HTMLElement {
    const element = document.createElement('div');
    element.className = 'manufacturer';
    const title = document.createElement('h3');
    title.innerHTML = 'Производитель: ';
    element.append(title);
    const container = document.createElement('div');
    container.className = 'mfrs';
    this.mfrs.map(item => {
      container.append(item.element);
    });
    element.append(container);
    return element;
  }
}
