import { DATACARDS } from "../data/constants";
import Data from "../data/data";
import View from "../view/view";
import Card from "../data/Card";
import FilterData from "../data/FilterData";

export default class App {
  data: Data;
  view: View;
  filter: FilterData;
  cards: Card[] = [];
  amoundCart: number;

  constructor() {
    const storage = localStorage.getItem("amoundCart");
    this.amoundCart = storage ? JSON.parse(storage) : 0;
    this.data = new Data(DATACARDS);
    this.view = new View();
    this.filter = new FilterData();
  }

  public start() {
    this.cards = this.filterCards();
    this.view.showCart(this.amoundCart.toString());
    this.view.showFilter(this.filter.filterElement);
    this.view.showCards(this.cards);
    this.data.cards.map((item) => {
      item.element.onclick = () => {
        item.favotite();
        if (item.isFavorit) {
          this.amoundCart++;
          localStorage.amoundCart = this.amoundCart;
        } else {
          this.amoundCart--;
          localStorage.amoundCart = this.amoundCart;
        }
        this.view.showCart(this.amoundCart.toString());
      };
    });
    this.filter.mfrs.map((item) => {
      item.element.onclick = () => {
        item.element.classList.toggle("mfrs__button_active");
        item.isActive = !item.isActive;
        localStorage.setItem(`Mfr${item.name}`, JSON.stringify(item.isActive));
        this.cards = this.filterCards();
        this.view.showCards(this.cards);
      };
    });
  }

  private filterCards(): Card[] {
    const items: string[] = this.filter.getFiters();
    if (items.length === 0) {
      return this.data.cards;
    }
    const result: Card[] = this.data.cards.filter((item) => {
      return items.some((str) => {
        return str == item.manufacturer;
      });
    });
    return result;
  }
}
