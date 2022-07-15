import FilterAmount from "./filter/FilterAmount";
import Mfr from "./filter/filterAmount/Mfr";

export default class FilterData {
	filterAmount: FilterAmount;
	filterElement: HTMLElement;
	mfrs: Mfr[];
  constructor() {
		this.filterAmount = new FilterAmount
		this.filterElement = this.createFilterElement();
		this.mfrs = this.filterAmount.filterMfrs.mfrs;
  }

	private createFilterElement(): HTMLElement {
		const element = document.createElement('section');
		element.className = 'filterConteiner';
		element.append(this.filterAmount.element);

		return element;
	}
}
