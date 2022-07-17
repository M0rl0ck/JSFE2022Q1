import Button from "./Button";

export default class Buttons<T extends string> {
  mfrs: Button[] = [];
  eiement: HTMLElement;
  constructor(data: readonly T[], private title:string, private myclass: string) {
    data.map((item) => {
      const el = new Button(item, this.myclass);
      this.mfrs.push(el);
    });
    this.eiement = this.createEl();
  }

  private createEl(): HTMLElement {
    const element = document.createElement('div');
    element.className = `container${this.myclass}`;
    const title = document.createElement('h3');
    title.innerHTML = `${this.title}`;
    element.append(title);
    const container = document.createElement('div');
    container.className = this.myclass;
    this.mfrs.map(item => {
      container.append(item.element);
    });
    element.append(container);
    return element;
  }
}
