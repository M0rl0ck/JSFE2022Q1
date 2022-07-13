import { DATACARDS } from "../data/constants";
import Data from "../data/data";
import View from "../view/view";
import Card from "../data/Card";

export default class App {
  data: Data;
  view: View;
  cards: Card[] = [];
  amoundTrash = 0;

  constructor() {
    this.data = new Data(DATACARDS);
    this.view = new View();
  }

  public start() {
    this.cards = [...this.data.cards];
    this.view.init();
    this.view.showCards(this.cards);
    this.data.cards.map((item) => {
      item.element.onclick = () => {
        item.favotite();
        if (item.isFavorit) {
          this.amoundTrash++;
        } else {
          this.amoundTrash--;
        }
        this.view.showTrash(this.amoundTrash.toString());
      };
    });
  }
}
