import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISource, IApp , err } from '../../type/interface';

class App implements IApp {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const source = document.querySelector('.sources');
    if (!source) {
      throw new Error(err.notEllement);
    }
    source.addEventListener('click', (e: Event): void => this.controller.getNews(e, (data: INews): void => this.view.drawNews(data)));
    this.controller.getSources((data: ISource): void => this.view.drawSources(data));
  }
}

export default App;
