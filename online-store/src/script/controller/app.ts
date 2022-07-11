import { DATACARDS } from "../data/constants";
import Data from "../data/data";
import  View from '../view/view';
import Card from '../data/Card';

export default class App {
  data: Data;
  view: View;
  cards: Card[] = [];

  constructor() {
    this.data = new Data(DATACARDS);
    this.view = new View();
  }

  public start() {
    this.cards = this.data.cards;
    this.view.init(this.cards);
  }
}
