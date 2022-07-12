import Card from "../data/Card";

export default class View {
  header: HTMLElement;
  main: HTMLElement;
  amauntTrash: HTMLElement;
  cardsContainer: HTMLElement;

  constructor() {
    this.amauntTrash = document.createElement("span");
    this.cardsContainer = this.createCardsContainer();
    this.main = this.createMain();
    this.header = this.createHeader();
  }
  public init(): void {
    document.body.prepend(this.main);
    this.main.append(this.cardsContainer);
    document.body.prepend(this.header);
  }

  public showCards(data: Card[]): void {
    this.cardsContainer.innerHTML = '';
    data.map((item) => {
      this.cardsContainer.append(item.element);
    });
  }

  public showTrash(value: string) {
    this.amauntTrash.innerHTML = value;
  }

  private createHeader(): HTMLElement {
    const element = document.createElement("header");
    element.className = "header";
    const title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Online Store";
    element.append(title);
    const trash = document.createElement("div");
    trash.className = "trash";
    this.amauntTrash.innerHTML = "0";
    trash.append(this.amauntTrash);
    element.append(trash);

    return element;
  }
  private createMain(): HTMLElement {
    const main: HTMLElement = document.createElement("main");
    main.className = "main";
    return main;
  }
  private createCardsContainer():HTMLElement {
    const element = document.createElement('section');
    element.className = 'cards';
    return element;
  }
}
