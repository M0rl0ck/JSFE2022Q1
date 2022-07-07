import News from './news/news';
import Sources from './sources/sources';
import { articles, INews, ISource, sources } from '../../type/interface';

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

  public drawNews(data: INews): void {
    const values: articles[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: ISource): void {
    const values: sources[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
