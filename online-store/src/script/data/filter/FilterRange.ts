import * as noUiSlider from "../../../../node_modules/nouislider/dist/nouislider";
import { createHtmlElement } from "../function";

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
    this.sliderAmount = createHtmlElement("div", "range__amount");
    this.sliderAge = createHtmlElement("div", "range__age");
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
    const element = createHtmlElement('div', 'rang__value', value.toString())

    return element;
  }

  private getValue(name: string, value: number[]): number[] {
    const num = localStorage.getItem(name);
    return num ? JSON.parse(num) : value;
  }

  private createEl(): HTMLElement {
    const element: HTMLElement = createHtmlElement("div", "filterConteiner__group");
    const rangeAmount = createHtmlElement("div", "range");
    createHtmlElement("h3", '', "Количество на складе: ", rangeAmount);
    const sliderAmountContainer = createHtmlElement('div', 'range__slider', '', rangeAmount);
    sliderAmountContainer.append(this.minAmountEl, this.sliderAmount, this.maxAmountEl);

    const rangeAge = createHtmlElement("div", "range");
    createHtmlElement("h3", '',  "Год выхода на рынок: ", rangeAge)
    const sliderAgeContainer = createHtmlElement('div', 'range__slider', '', rangeAge)
    sliderAgeContainer.append(this.minAgeEl, this.sliderAge, this.maxAgeEl);

    element.append(rangeAmount, rangeAge);

    return element;
  }
}
