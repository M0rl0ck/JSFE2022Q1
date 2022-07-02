import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISource } from '../../type/interface';

interface IApp {
  controller: AppController;
  view: AppView;
}

class App implements IApp {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const source = document.querySelector('.sources');
    if (!source) throw new Error('not find Element');
    source.addEventListener('click', (e) => this.controller.getNews(e, (data: INews) => this.view.drawNews(data)));
    this.controller.getSources((data: ISource) => this.view.drawSources(data));
  }
}

export default App;
