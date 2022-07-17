import { MANUFACTURERS, SIZES } from "../constants";
import {manufacturers, sizesType} from '../../type/types';
import Buttons from "./Buttons";

export default class filterAmount {
filterMfrs: Buttons<manufacturers>;
filterSizes: Buttons<sizesType>
element: HTMLElement;
constructor() {
  this.filterMfrs = new Buttons(MANUFACTURERS, 'Производиитель: ', 'mfrs');
  this.filterSizes = new Buttons(SIZES, 'Размер экрана: ', 'sizes');
  this.element = this.createEl();
}
private createEl(): HTMLElement {
const element = document.createElement('div');
element.className = 'filtersAmount';
element.append(this.filterMfrs.eiement);
element.append(this.filterSizes.eiement);

return element;
}
}