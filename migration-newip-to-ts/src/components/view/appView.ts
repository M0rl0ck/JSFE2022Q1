import News from './news/news';
import Sources from './sources/sources';
import { INews, ISource } from '../../type/interface';

interface IAppView {
  news: News;
  sources: Sources;
}

export class AppView implements IAppView {
  news: News;
  sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: INews) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISource) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
