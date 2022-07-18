import { MANUFACTURERS, SIZES, COLORS, HOT } from "../constants";
import {manufacturers, sizesType, colorType, hotType} from '../../type/types';
import Buttons from "./Buttons";

export default class filterAmount {
filterMfrs: Buttons<manufacturers>;
filterSizes: Buttons<sizesType>;
filterColors: Buttons<colorType>;
filterHot: Buttons<hotType>;
element: HTMLElement;
constructor() {
  this.filterMfrs = new Buttons(MANUFACTURERS, 'Производиитель: ', 'mfrs');
  this.filterSizes = new Buttons(SIZES, 'Размер экрана: ', 'sizes');
  this.filterColors = new Buttons(COLORS, 'Цвет: ', 'colors');
  this.filterHot = new Buttons(HOT, 'Только популярные: ', 'hot');
  this.element = this.createEl();
}
private createEl(): HTMLElement {
const element = document.createElement('div');
element.className = 'filterConteiner__group';
element.append(this.filterMfrs.eiement);
element.append(this.filterSizes.eiement);
element.append(this.filterColors.eiement);
element.append(this.filterHot.eiement);

return element;
}
}