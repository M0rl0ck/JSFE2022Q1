import FilterAmount from "./filter/FilterAmount";
import Button from "./filter/Button";

export default class FilterData {
  filterAmount: FilterAmount;
  filterElement: HTMLElement;
  mfrs: Button[];
  sizes: Button[];
  colors: Button[];
  hot: Button[];
  constructor() {
    this.filterAmount = new FilterAmount();
    this.filterElement = this.createFilterElement();
    this.mfrs = this.filterAmount.filterMfrs.buttons;
    this.sizes = this.filterAmount.filterSizes.buttons;
    this.colors = this.filterAmount.filterColors.buttons;
    this.hot = this.filterAmount.filterHot.buttons;
  }

  private createFilterElement(): HTMLElement {
    const element = document.createElement("section");
    element.className = "filterConteiner";
    element.append(this.filterAmount.element);

    return element;
  }

  public getFiters(data: Button[]): string[] {
    const result: string[] = [];
		data.map(item => {
			if (item.isActive) {
				result.push(item.name);
			}
		})

    return result;
  }
}
