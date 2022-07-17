import { MANUFACTURERS } from "../constants";
import {manufacturers} from '../../type/types';
import Buttons from "./Buttons";

export default class filterAmount {
filterMfrs: Buttons<manufacturers>;
element: HTMLElement;
constructor() {
  this.filterMfrs = new Buttons(MANUFACTURERS, 'Производиитель: ', 'mfrs');
  this.element = this.createEl();
}
private createEl(): HTMLElement {
const element = document.createElement('div');
element.className = 'filtersAmount';
element.append(this.filterMfrs.eiement);

return element;
}
}