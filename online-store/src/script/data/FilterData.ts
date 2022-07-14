import FilterAmount from "./filter/FilterAmount";

export default class FilterData {
	filterAmount: FilterAmount;
	filterElement: HTMLElement;
  constructor() {
		this.filterAmount = new FilterAmount
		this.filterElement = this.createFilterElement();
  }

	private createFilterElement(): HTMLElement {
		const element = document.createElement('section');
		element.className = 'filterConteiner';
		element.append(this.filterAmount.element);

		return element;
	}
}
