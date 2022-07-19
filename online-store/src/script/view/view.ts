import Card from "../data/Card";

export default class View {
  header: HTMLElement;
  contentWrapper: HTMLElement;
  amauntCart: HTMLElement;
  cardsContainer: HTMLElement;
  noData: HTMLElement;
  noPlace: HTMLElement;

  constructor() {
    this.amauntCart = document.createElement("span");
    this.cardsContainer = this.createCardsContainer();
    this.contentWrapper = this.createWrapper();
    this.header = this.createHeader();
    this.createMain();
    document.body.prepend(this.header);
    this.noData = this.createNoData(
      "nodata",
      "Извините, совпадений не обнаружено!"
    );
    this.noPlace = this.createNoData(
      "noplace",
      "Извините, все слоты заполнены."
    );
    
  }

  public showNoPlace(): void {
    document.body.append(this.noPlace);
  }

  public hideNoPlace(): void {
    this.noPlace.remove();
  }

  public showCards(data: Card[]): void {
    this.cardsContainer.innerHTML = "";
    if (!data.length) {
      this.cardsContainer.append(this.noData);
    } else {
      data.map((item) => {
        this.cardsContainer.append(item.element);
      });
    }
  }

  public showCart(value: string) {
    this.amauntCart.innerHTML = value;
  }

  public showFilter(value: HTMLElement): void {
    this.contentWrapper.prepend(value);
  }

  private createNoData(myclass: string, str: string): HTMLElement {
    const nodata = document.createElement("div");
    nodata.className = myclass;
    const title = document.createElement("h2");
    title.innerHTML = str;
    nodata.append(title);

    return nodata;
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
