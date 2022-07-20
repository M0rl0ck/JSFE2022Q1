import {
  DATACARDS,
  SLIDER_VALUE,
  MAXPLACE,
  EMPTYCART,
  SORT,
} from "../data/constants";
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
    this.amoundCart = storage ? JSON.parse(storage) : EMPTYCART;
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

    const clickCard = (e: Event): void => {

      const el = e.target as HTMLElement;
      const card: Card | undefined = this.data.cards.find((item) => {
        return item.element === el.closest('.card');
      });

      if (!card) {
        return;
      }

      if (!card.isFavorit) {
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
      card.favotite();
    };


    this.view.cardsContainer.addEventListener("click", clickCard);

    const mfrsContainer: HTMLElement = this.filter.filterAmount.filterMfrs.buttonsContainer;
    const sizesContainer: HTMLElement = this.filter.filterAmount.filterSizes.buttonsContainer;
    const colorsContainer: HTMLElement = this.filter.filterAmount.filterColors.buttonsContainer;
    const hotContainer: HTMLElement = this.filter.filterAmount.filterHot.buttonsContainer;

    this.setEvent(this.filter.mfrs, "mfrs", mfrsContainer);

    this.setEvent(this.filter.sizes, "sizes", sizesContainer);

    this.setEvent(this.filter.colors, "colors", colorsContainer);

    this.setEvent(this.filter.hot, "hot", hotContainer);



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

    this.filter.filterSearch.input.addEventListener('input', () => {
      this.cards = this.filterCards();
      this.view.showCards(this.cards);
    });
    this.filter.filterSearch.sort.addEventListener('change', () => {
      this.cards = this.filterCards();
      this.view.showCards(this.cards);
    })
  }

  private setEvent(data: Button[], value: string, container: HTMLElement): void {
 
      container.addEventListener('click', (e) => {
        const el = e.target as HTMLElement;
        const button: Button | undefined = data.find((item) => {
          return item.element === el.closest('.button');
        });
        if (!button) {
          return;
        }

         button.element.classList.toggle(`button_active`);
        button.isActive = !button.isActive;
        localStorage.setItem(
          `${value}${button.name}`,
          JSON.stringify(button.isActive)
        );
        this.cards = this.filterCards();
        this.view.showCards(this.cards);
      });

  }

  private filterCards(): Card[] {
    const mfrs: string[] = this.filter.getFiters(this.filter.mfrs);
    const sizes: string[] = this.filter.getFiters(this.filter.sizes);
    const colors: string[] = this.filter.getFiters(this.filter.colors);
    const hot: string[] = this.filter.getFiters(this.filter.hot);
    const search: string = this.filter.filterSearch.searchValue;

    let result: Card[];
    result = this.filterAmount(mfrs, this.data.cards, "manufacturer");
    result = this.filterAmount(sizes, result, "size");
    result = this.filterAmount(colors, result, "color");
    result = this.filterAmount(hot, result);
    result = this.filterRange(this.rangAmount, result, "amount");
    result = this.filterRange(this.rangAge, result, "year");
    result = this.filterSearch(search, result);
    result = this.filterSort(result);

    return result;
  }

  private filterSort(data: Card[]): Card[] {
    const sortCards = (property: keyof Card, a: Card, b: Card): number => {
       if (a[property] > b[property]) {
            return 1;
          }
          return -1;
    }
    const sort: number = this.filter.filterSearch.sort.selectedIndex;
    switch(sort) {
      case SORT.name: {
        return data.sort((a, b) => sortCards('name', a ,b));
      }
      case SORT.namerevers: {
        return data.sort((a, b) => -sortCards('name', a ,b));
      }
      case SORT.year: {
        return data.sort((a, b) => sortCards('year', a ,b));
      }
      case SORT.yearrevers: {
        return data.sort((a, b) => -sortCards('year', a ,b));
      }
      case SORT.amount: {
        return data.sort((a, b) => sortCards('amount', a ,b));
      }
      case SORT.amountrevers: {
        return data.sort((a, b) => -sortCards('amount', a ,b));
      }
    }

    

    return data;
  }

  private filterSearch(filterKey: string, data: Card[]): Card[] {
    return data.filter(item => {
      return item.name.toLowerCase().includes(filterKey.toLowerCase());
    })
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
