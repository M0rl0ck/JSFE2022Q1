import Button from "./Button";

export default class Buttons<T extends string> {
  buttons: Button[] = [];
  eiement: HTMLElement;
  constructor(data: readonly T[], private title: string, private myclass: string) {
    data.map((item) => {
      const el = new Button(item, this.myclass);
      this.buttons.push(el);
    });
    this.eiement = this.createEl();
  }

  private createEl(): HTMLElement {
    const element = document.createElement('div');
    element.className = `containerButtons`;
    const title = document.createElement('h3');
    title.innerHTML = `${this.title}`;
    element.append(title);
    const container = document.createElement('div');
    container.className = 'buttons';
    this.buttons.map(item => {
      container.append(item.element);
    });
    element.append(container);
    return element;
  }
}
