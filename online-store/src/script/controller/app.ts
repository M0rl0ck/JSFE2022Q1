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
  amoundTrash: number;

  constructor() {
    const trash = localStorage.getItem('amoundTrash');
    this.amoundTrash = trash ? JSON.parse(trash) : 0;
    this.data = new Data(DATACARDS);
    this.view = new View();
    this.filter = new FilterData();
  }

  public start() {
    this.cards = [...this.data.cards];
    this.view.init();
    this.view.showTrash(this.amoundTrash.toString());
    this.view.showFilter(this.filter.filterElement);
    this.view.showCards(this.cards);
    this.data.cards.map((item) => {
      item.element.onclick = () => {
        item.favotite();
        if (item.isFavorit) {
          this.amoundTrash++;
          localStorage.amoundTrash = this.amoundTrash;
        } else {
          this.amoundTrash--;
          localStorage.amoundTrash = this.amoundTrash;
        }
        this.view.showTrash(this.amoundTrash.toString());
      };
    });
  }
}
