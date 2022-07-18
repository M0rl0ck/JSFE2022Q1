import * as noUiSlider from "../../../../node_modules/nouislider/dist/nouislider";

export default class FilterRange {
  element: HTMLElement;
  sliderAmount: noUiSlider.target;
  minAmount: number;
  maxAmount: number;
  minAmountEl: HTMLElement;
  maxAmountEl: HTMLElement;
  sliderAge: noUiSlider.target;
  minAge: number;
  maxAge: number;
  minAgeEl: HTMLElement;
  maxAgeEl: HTMLElement;
  constructor() {
    [this.minAmount, this.maxAmount] = this.getValue("rangamount", [1, 20]);
    [this.minAge, this.maxAge] = this.getValue("rangage", [2010, 2022]);
    this.minAmountEl = this.createRangValue(this.minAmount);
    this.maxAmountEl = this.createRangValue(this.maxAmount);
    this.minAgeEl = this.createRangValue(this.minAge);
    this.maxAgeEl = this.createRangValue(this.maxAge);
    this.sliderAmount = this.createSlider("range__amount");
    this.sliderAge = this.createSlider("range__age");
    this.element = this.createEl();

    noUiSlider.create(this.sliderAmount, {
      start: [this.minAmount, this.maxAmount],
      tooltips: true,
      step: 1,
      connect: true,
      format: {
        to: function (value) {
          return Math.floor(value);
        },
        from: function (value) {
          return parseInt(value);
      }
      },
      range: {
        min: [1],
        max: [20],
      },
      
    });

    noUiSlider.create(this.sliderAge, {
      start: [this.minAge, this.maxAge],
      tooltips: true,
      step: 1,
      connect: true,
      format: {
        to: function (value) {
          return Math.floor(value);
        },
        from: function (value) {
          return parseInt(value);
      }
      },
      range: {
        min: [2010],
        max: [2022],
      },
    });
  }

  private createRangValue(value: number): HTMLElement {
    const element = document.createElement('div');
    element.className = 'rang__value';
    element.innerHTML = value.toString();
    return element;
  }

  private getValue(name: string, value: number[]): number[] {
    const num = localStorage.getItem(name);
    return num ? JSON.parse(num) : value;
  }

  private createSlider(myclass: string): HTMLElement {
    const element: HTMLElement = document.createElement("div");
    element.className = myclass;

    return element;
  }

  private createEl(): HTMLElement {
    const element: HTMLElement = document.createElement("div");
    element.className = "filterConteiner__group";
    const range1 = document.createElement("div");
    range1.className = "range";
    const title1 = document.createElement("h3");
    title1.innerHTML = "Количество на складе: ";
    const sliderContainer1 = document.createElement('div');
    sliderContainer1.className = 'range__slider';
    range1.append(title1, sliderContainer1);
    sliderContainer1.append(this.minAmountEl, this.sliderAmount, this.maxAmountEl);

    const range2 = document.createElement("div");
    range2.className = "range";
    const title2 = document.createElement("h3");
    title2.innerHTML = "Год выхода на рынок: ";
    const sliderContainer2 = document.createElement('div');
    sliderContainer2.className = 'range__slider';
    range2.append(title2, sliderContainer2);
    sliderContainer2.append(this.minAgeEl, this.sliderAge, this.maxAgeEl);

    element.append(range1, range2);

    return element;
  }
}
