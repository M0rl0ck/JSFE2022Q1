import Card from '../data/Card';

export default class View {
  main: HTMLElement

  constructor() {
    this.main = this.createMain();
  }
  public init(data: Card[]): void {
    document.body.prepend(this.main);
    data.map(item => {
      this.main.append(item.element);
    })
  }

  private createMain(): HTMLElement {
    const main: HTMLElement = document.createElement("main");
    main.className = "main";

    return main;
  }
}
