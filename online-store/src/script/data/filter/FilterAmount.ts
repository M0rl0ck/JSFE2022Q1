import { MANUFACTURERS, SIZES, COLORS } from "../constants";
import {manufacturers, sizesType, colorType} from '../../type/types';
import Buttons from "./Buttons";

export default class filterAmount {
filterMfrs: Buttons<manufacturers>;
filterSizes: Buttons<sizesType>;
filterColors: Buttons<colorType>;
element: HTMLElement;
constructor() {
  this.filterMfrs = new Buttons(MANUFACTURERS, 'Производиитель: ', 'mfrs');
  this.filterSizes = new Buttons(SIZES, 'Размер экрана: ', 'sizes');
  this.filterColors = new Buttons(COLORS, 'Цвет: ', 'colors');
  this.element = this.createEl();
}
private createEl(): HTMLElement {
const element = document.createElement('div');
element.className = 'filtersAmount';
element.append(this.filterMfrs.eiement);
element.append(this.filterSizes.eiement);
element.append(this.filterColors.eiement);

return element;
}
}