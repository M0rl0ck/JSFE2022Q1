import { DATACARDS, SLIDER_VALUE, MAXPLACE } from "../data/constants";
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
  rangAmount: number[];
  rangAge: number[];

  constructor() {
    const storage = localStorage.getItem("amoundCart");
    this.amoundCart = storage ? JSON.parse(storage) : 0; //..............................
    this.data = new Data(DATACARDS);
    this.view = new View();
    this.filter = new FilterData();
    this.rangAmount = [
      this.filter.filterRange.minAmount,
      this.filter.filterRange.maxAmount,
    ];
    this.rangAge = [
      this.filter.filterRange.minAge,
      this.filter.filterRange.maxAge,
    ];
  }

  public start() {
    this.cards = this.filterCards();
    this.view.showCart(this.amoundCart.toString());
    this.view.showFilter(this.filter.filterElement);
    this.view.showCards(this.cards);

    this.view.noPlace.addEventListener("click", () => {
      this.view.hideNoPlace();
    });

    this.data.cards.map((item) => {
      item.element.onclick = () => {
        if (!item.isFavorit) {
          if (this.amoundCart === MAXPLACE) {
            this.view.showNoPlace();

            return;
          }
          this.amoundCart++;
          localStorage.amoundCart = this.amoundCart;
        } else {
          this.amoundCart--;
          localStorage.amoundCart = this.amoundCart;
        }
        this.view.showCart(this.amoundCart.toString());

        item.favotite();
      };
    });

    this.setEvent(this.filter.mfrs, "mfrs");

    this.setEvent(this.filter.sizes, "sizes");

    this.setEvent(this.filter.colors, "colors");

    this.setEvent(this.filter.hot, "hot");

    this.filter.filterRange.sliderAmount.noUiSlider?.on(
      "update",
      (values: (string | number)[], handle: number): void => {
        this.rangAmount[handle] = Number(values[handle]);
        localStorage.setItem("rangamount", JSON.stringify(this.rangAmount));
        this.filter.filterRange.minAmountEl.innerHTML =
          this.rangAmount[SLIDER_VALUE.min].toString();
        this.filter.filterRange.maxAmountEl.innerHTML =
          this.rangAmount[SLIDER_VALUE.max].toString();
        this.cards = this.filterCards();
        this.view.showCards(this.cards);
      }
    );

    this.filter.filterRange.sliderAge.noUiSlider?.on(
      "update",
      (values: (string | number)[], handle: number): void => {
        this.rangAge[handle] = Number(values[handle]);
        localStorage.setItem("rangage", JSON.stringify(this.rangAge));
        this.filter.filterRange.minAgeEl.innerHTML =
          this.rangAge[SLIDER_VALUE.min].toString();
        this.filter.filterRange.maxAgeEl.innerHTML =
          this.rangAge[SLIDER_VALUE.max].toString();
        this.cards = this.filterCards();
        this.view.showCards(this.cards);
      }
    );
  }

  private setEvent(data: Button[], value: string): void {
    data.map((item) => {
      item.element.onclick = () => {
        item.element.classList.toggle(`button_active`);
        item.isActive = !item.isActive;
        localStorage.setItem(
          `${value}${item.name}`,
          JSON.stringify(item.isActive)
        );
        this.cards = this.filterCards();
        this.view.showCards(this.cards);
      };
    });
  }

  private filterCards(): Card[] {
    const mfrs: string[] = this.filter.getFiters(this.filter.mfrs);
    const sizes: string[] = this.filter.getFiters(this.filter.sizes);
    const colors: string[] = this.filter.getFiters(this.filter.colors);
    const hot: string[] = this.filter.getFiters(this.filter.hot);

    let result: Card[];
    result = this.filterAmount(mfrs, this.data.cards, "manufacturer");
    result = this.filterAmount(sizes, result, "size");
    result = this.filterAmount(colors, result, "color");
    result = this.filterAmount(hot, result);
    result = this.filterRange(this.rangAmount, result, "amount");
    result = this.filterRange(this.rangAge, result, "year");

    return result;
  }

  private filterRange(
    rang: number[],
    data: Card[],
    property: keyof Card
  ): Card[] {
    return data.filter((item) => {
      return (
        rang[SLIDER_VALUE.min] <= item[property] &&
        item[property] <= rang[SLIDER_VALUE.max]
      );
    });
  }

  private filterAmount(
    filtersKey: string[],
    data: Card[],
    property?: keyof Card
  ): Card[] {
    if (!filtersKey.length) {
      return data;
    }

    if (!property) {
      const result: Card[] = data.filter((item) => {
        return item.hot;
      });
      return result;
    }
    const result: Card[] = data.filter((item) => {
      return filtersKey.some((str) => {
        return str === item[property];
      });
    });
    return result;
  }
}
