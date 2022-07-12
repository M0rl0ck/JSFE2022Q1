import { colorType } from "../type/types";

export default class Card {
  isFavorit: boolean;
  trash: HTMLDivElement;
  element: HTMLElement;

  constructor(
    private name: string,
    private img: string,
    private amount: number,
    private year: number,
    private manufacturer: string,
    private color: colorType,
    private size: number,
    private hot: boolean
  ) {
    this.isFavorit = false;
    this.trash = this.createTrash();
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
    color.innerHTML = `Количество: ${this.color}`;
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
    favorites.append(this.trash);
    element.append(favorites);

    return element;
  }

  private createTrash(): HTMLDivElement {
    const trash = document.createElement("div");
    trash.className = "card__trash";
    return trash;
  }

  public favotite(): void {
    this.isFavorit = !this.isFavorit;
    console.log(this.isFavorit);
    if (this.trash) {
      this.trash.classList.toggle("card__trash_favorites");
    }
  }
}
