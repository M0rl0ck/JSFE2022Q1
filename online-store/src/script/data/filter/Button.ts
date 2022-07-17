export default class Button {
  isActive: boolean;
  element: HTMLElement;
  constructor(public name: string, private myClass: string) {
    const isName = localStorage.getItem(`${this.myClass}${this.name}`);
    this.isActive = isName ? JSON.parse(isName) : false;
    this.element = this.createEl();
  }

  private createEl(): HTMLElement {
    const element = document.createElement("div");
    element.className = this.isActive
      ? `${this.myClass}__button ${this.name} ${this.myClass}__button_active`
      : `${this.myClass}__button ${this.name}`;

      return element;
  }
}
