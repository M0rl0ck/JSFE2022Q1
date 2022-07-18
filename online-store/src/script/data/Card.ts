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
    const element: HTMLElement = document.createElement("div");
    element.className = "card";
    const title = document.createElement("h2");
    title.className = "card__title";
    title.innerHTML = this.name;
    element.append(title);
    const containerImg = document.createElement("div");
    containerImg.className = "card__img-container";
    containerImg.innerHTML = ` <img class="card__img" src="${this.img}" alt="${this.name}">`;
    element.append(containerImg);

    const props = document.createElement("ul");
    props.className = "card__props";

    const amound = document.createElement("li");
    amound.innerHTML = `Количество: ${this.amount}`;
    props.append(amound);

    const year = document.createElement("li");
    year.innerHTML = `Год выхода: ${this.year}`;
    props.append(year);

    const manufacturer = document.createElement("li");
    manufacturer.innerHTML = `Производитель: ${this.manufacturer}`;
    props.append(manufacturer);

    const color = document.createElement("li");
    color.innerHTML = `Цвет: ${COLORSNAME[this.color]}`;
    props.append(color);

    const size = document.createElement("li");
    size.innerHTML = `Размер экрана: ${this.size}"`;
    props.append(size);

    const hot = document.createElement("li");
    const pop: string = this.hot ? "да" : "нет";
    hot.innerHTML = `Популярный: ${pop}`;
    props.append(hot);

    element.append(props);

    const favorites = document.createElement("div");
    favorites.className = "card__favorites";
    favorites.append(this.cart);
    element.append(favorites);

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
