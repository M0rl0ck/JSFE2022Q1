const createHtmlElement = (
  type: string,
  newclass: string,
  innerHTML?: string,
  parrent?: HTMLElement
): HTMLElement => {
  const element = document.createElement(type);
  if (newclass) {
    element.className = newclass;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  if (parrent) {
    parrent.append(element);
  }

  return element;
};

export { createHtmlElement }