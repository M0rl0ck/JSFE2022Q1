import Card from "../data/Card";

export default class View {
  header: HTMLElement;
  contentWrapper: HTMLElement;
  amauntCart: HTMLElement;
  cardsContainer: HTMLElement;

  constructor() {
    this.amauntCart = document.createElement("span");
    this.cardsContainer = this.createCardsContainer();
    this.contentWrapper = this.createWrapper();
    this.header = this.createHeader();
    this.createMain();
    document.body.prepend(this.header);
  }

  public showCards(data: Card[]): void {
    this.cardsContainer.innerHTML = "";
    data.map((item) => {
      this.cardsContainer.append(item.element);
    });
  }

  public showCart(value: string) {
    this.amauntCart.innerHTML = value;
  }

  public showFilter(value: HTMLElement): void {
    this.contentWrapper.prepend(value);
  }

  private createHeader(): HTMLElement {
    const element = document.createElement("header");
    element.className = "header";
    const wraper = document.createElement("div");
    wraper.className = "wrapper";
    const title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Online Store";
    wraper.append(title);
    const cart = document.createElement("div");
    cart.className = "cart";
    this.amauntCart.innerHTML = "0";
    cart.append(this.amauntCart);
    wraper.append(cart);
    element.append(wraper);

    return element;
  }

  private createWrapper(): HTMLElement {
    const wraper = document.createElement("div");
    wraper.className = "wrapper";
    return wraper;
  }

  private createMain(): void {
    const main: HTMLElement = document.createElement("main");
    main.className = "main";
    main.append(this.contentWrapper);
    document.body.prepend(main);
    this.contentWrapper.append(this.cardsContainer);
  }
  private createCardsContainer(): HTMLElement {
    const element = document.createElement("section");
    element.className = "cards";
    return element;
  }
}
