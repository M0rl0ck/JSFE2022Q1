import { createHtmlElement } from "../function";

export default class FilterSearch {
  element: HTMLElement;
  input: HTMLInputElement;
  sort: HTMLSelectElement;
  searchValue: string;
  selectedIndex: number;
  resetFilter: HTMLElement;
  resetSetting: HTMLElement;
  constructor() {
    const value = localStorage.getItem('searchValue');
    this.searchValue = value ? value : '';
    this.input = this.createImput();

    const index = localStorage.getItem('selectIndex');
    this.selectedIndex = index ? Number(index) : 0;

    this.sort = this.cresteSelect();
    this.resetFilter = createHtmlElement('button', 'button', 'Сброс фильтров');
    this.resetSetting = createHtmlElement('button', 'button', 'Сброс настроек');
    this.element = this.createEl();
  }

  private createImput(): HTMLInputElement {
    const element = createHtmlElement('input', '') as HTMLInputElement;
    element.setAttribute('type', "search");
    element.setAttribute('placeholder', "Введите текст");
    element.setAttribute('autofocus', '');
    element.value = this.searchValue;
    element.addEventListener('input', () => {
      this.searchValue = element.value;
      localStorage.setItem('searchValue', element.value)
    });
    return element;
  }

  private cresteSelect(): HTMLSelectElement {
    const template = `
    <option >По названию, от А до Я</option>
    <option >По названию, от Я до А</option>
    <option >По году,по возрастанию</option>
    <option >По году,по убыванию</option>
    <option >По количеству,по возрастанию</option>
    <option >По количеству,по убыванию</option>
    `;

    const sort = createHtmlElement('select', 'sort', template) as HTMLSelectElement;
    sort.selectedIndex = this.selectedIndex;
    return sort;
  }

  private createEl(): HTMLElement {
    const element: HTMLElement = createHtmlElement("div", 'filterConteiner__group')
    const searchContainer = createHtmlElement('div', 'searchContainer', '', element);
    createHtmlElement('h3', '', 'Поиск', searchContainer);
    searchContainer.append(this.input);

    const sortContainer = createHtmlElement('div', 'sortContainer', '', element);
    createHtmlElement('h3', '', 'Сортировка', sortContainer);
    sortContainer.append(this.sort);
    
    this.sort.addEventListener('change', () => {
      localStorage.setItem('selectIndex', this.sort.selectedIndex.toString());
    });
    
    const resetContainer = createHtmlElement('div', 'resetContainer', '', element);
    resetContainer.append(this.resetFilter, this.resetSetting);

    this.resetFilter.addEventListener('click', () => {
      localStorage.clear();
      localStorage.setItem('selectIndex', this.sort.selectedIndex.toString())
      location.reload();
    });

    this.resetSetting.addEventListener('click', () => {
      localStorage.clear();
      location.reload();
    });


    return element;
  }

  
}
