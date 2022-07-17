import { DATACARDS } from "../data/constants";
import Data from "../data/data";
import View from "../view/view";
import Card from "../data/Card";
import FilterData from "../data/FilterData";
import Button from "../data/filter/Button";

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

    this.setEvent(this.filter.mfrs, 'mfrs');
    
    this.setEvent(this.filter.sizes, 'sizes');
    
  }

  private setEvent(data: Button[], value: string): void {
    data.map((item) => {
      item.element.onclick = () => {
        item.element.classList.toggle(`button_active`);
        item.isActive = !item.isActive;
        localStorage.setItem(`${value}${item.name}`, JSON.stringify(item.isActive));
        this.cards = this.filterCards();
        this.view.showCards(this.cards);
      };
    });
  }

  private filterCards(): Card[] {
    const mfrs: string[] = this.filter.getFiters(this.filter.mfrs);
    const sizes: string[] = this.filter.getFiters(this.filter.sizes);
    let result: Card[];
    result = this.filters(mfrs, this.data.cards, 'manufacturer');
    result = this.filters(sizes, result, 'size');
    

    return result;
  }

  private filters(filters: string[], data: Card[], property: (keyof Card)): Card[] {
    if (filters.length === 0) {
      return data;
    }
    const result: Card[] = data.filter((item) => {
      return filters.some((str) => {
        return str == item[property];
      });
    });
    return result;
  }
}
