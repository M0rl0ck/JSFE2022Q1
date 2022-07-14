export default class Mfr {
  isActive: boolean;
  element: HTMLElement;
  constructor(public name: string) {
    const isName = localStorage[this.name];
    this.isActive = isName ? JSON.parse(isName) : false;
    this.element = this.createEl();
  }

  private createEl(): HTMLElement {
    const element = document.createElement("div");
    element.className = this.isActive
      ? `mfrs__button ${this.name} mfrs__button_active`
      : `mfrs__button ${this.name}`;

      return element;
  }
}
