import FilterAmount from "./filter/FilterAmount";
import Button from "./filter/Button";

export default class FilterData {
  filterAmount: FilterAmount;
  filterElement: HTMLElement;
  mfrs: Button[];
  constructor() {
    this.filterAmount = new FilterAmount();
    this.filterElement = this.createFilterElement();
    this.mfrs = this.filterAmount.filterMfrs.mfrs;
  }

  private createFilterElement(): HTMLElement {
    const element = document.createElement("section");
    element.className = "filterConteiner";
    element.append(this.filterAmount.element);

    return element;
  }

  public getFiters(): string[] {
    const result: string[] = [];
		this.mfrs.map(item => {
			if (item.isActive) {
				result.push(item.name);
			}
		})

    return result;
  }
}
