import { colorType, manufacturers } from "../type/types";
import { COLORSNAME } from "./constants";

export default class Card {
  isFavorit: boolean;
  cart: HTMLDivElement;
  element: HTMLElement;

  constructor(
    public name: string,
    private img: string,
    public amount: number,
    public year: number,
    public manufacturer: manufacturers,
    public color: colorType,
    public size: string,
    public hot: boolean
  ) {
    const storage = localStorage.getItem(`card${this.name}`);
    this.isFavorit = storage ? JSON.parse(storage) : false;
    this.cart = this.createCart();
    this.element = this.createEl();
  }

  private createEl(): HTMLElement {
    const createHtmlElement = (
      type: string,
      newclass: string,
      innerHTML?: string,
      parrent?: HTMLElement
    ): HTMLElement => {
      const element = document.createElement(type);
      if (newclass) {
        element.className = newclass;
      }
      if (innerHTML) {
        element.innerHTML = innerHTML;
      }
      if (parrent) {
        parrent.append(element);
      }

      return element;
    };

    const element: HTMLElement = createHtmlElement("div", "card");
    createHtmlElement("h2", "card__title", `${this.name}`, element);
    createHtmlElement(
      "div",
      "card__img-container",
      ` <img class="card__img" src="${this.img}" alt="${this.name}">`,
      element
    );
    const props = createHtmlElement("ul", "card__props");
    createHtmlElement("li", "", `Количество: ${this.amount}`, props);
    createHtmlElement("li", "", `Год выхода: ${this.year}`, props);
    createHtmlElement("li", "", `Производитель: ${this.manufacturer}`, props);
    createHtmlElement("li", "", `Цвет: ${COLORSNAME[this.color]}`, props);
    createHtmlElement("li", "", `Размер экрана: ${this.size}`, props);
    const pop: string = this.hot ? "да" : "нет";
    createHtmlElement("li", "", `Популярный: ${pop}`, props);
    element.append(props);

    const favorites = createHtmlElement("div", "card__favorites", "", element);
    favorites.append(this.cart);

    return element;
  }

  private createCart(): HTMLDivElement {
    const cart = document.createElement("div");
    cart.className = this.isFavorit
      ? "card__cart card__cart_favorites"
      : "card__cart";
    return cart;
  }

  public favotite(): void {
    this.isFavorit = !this.isFavorit;
    localStorage.setItem(`card${this.name}`, JSON.stringify(this.isFavorit));
    if (this.cart) {
      this.cart.classList.toggle("card__cart_favorites");
    }
  }
}
