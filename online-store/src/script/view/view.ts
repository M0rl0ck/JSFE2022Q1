import Card from "../data/Card";

export default class View {
  header: HTMLElement;
  main: HTMLElement;
  amauntCart: HTMLElement;
  cardsContainer: HTMLElement;

  constructor() {
    this.amauntCart = document.createElement("span");
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

  public showCart(value: string) {
    this.amauntCart.innerHTML = value;
  }

  public showFilter(value: HTMLElement): void {
    this.main.prepend(value);
  }

  private createHeader(): HTMLElement {
    const element = document.createElement("header");
    element.className = "header";
    const title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Online Store";
    element.append(title);
    const cart = document.createElement("div");
    cart.className = "cart";
    this.amauntCart.innerHTML = "0";
    cart.append(this.amauntCart);
    element.append(cart);

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
