import './sources.css';
import { sources } from '../../../type/interface';

class Sources {
  draw(data: sources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    if (!sourceItemTemp) throw new Error('not find Element');

    data.forEach((item) => {
      const sourceClone: HTMLElement = <HTMLElement>sourceItemTemp.content.cloneNode(true);

      const sourceItemName = sourceClone.querySelector('.source__item-name');
      if (sourceItemName) {
        sourceItemName.textContent = item.name;
      } else throw new Error('not find Element');
      
      const sourceItem = sourceClone.querySelector('.source__item');
      if (sourceItem) {
        sourceItem.setAttribute('data-source-id', item.id);
      } else throw new Error('not find Element');
      

      fragment.append(sourceClone);
    });

    const sourcesDoc = document.querySelector('.sources');
    if (sourcesDoc) sourcesDoc.append(fragment);
    else throw new Error('not find Element');
    
  }
}

export default Sources;
