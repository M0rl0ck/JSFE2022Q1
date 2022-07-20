import FilterAmount from "./filter/FilterAmount";
import FilterRange from "./filter/FilterRange";
import FilterSearch from "./filter/FilterSearch";
import Button from "./filter/Button";

export default class FilterData {
  filterElement: HTMLElement;
  mfrs: Button[];
  sizes: Button[];
  colors: Button[];
  hot: Button[];
  constructor(
    public filterAmount: FilterAmount,
    public filterRange: FilterRange,
    public filterSearch: FilterSearch
  ) {

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
    element.append(this.filterRange.element);
    element.append(this.filterSearch.element);

    return element;
  }
  public getFiters(data: Button[]): string[] {
    const result: string[] = [];
    data.map((item) => {
      if (item.isActive) {
        result.push(item.name);
      }
    });

    return result;
  }
}
