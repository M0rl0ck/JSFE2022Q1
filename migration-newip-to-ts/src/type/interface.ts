import AppController from '../components/controller/controller';
import { AppView } from '../components/view/appView';
import News from '../components/view/news/news';
import Sources from '../components/view/sources/sources';

type stat = 'ok' | 'error';

enum err {
  notAttribut = 'not find Attribute',
  notEllement = 'not find Element',
  noCallback = 'No callback for GET response',
}

type articles = {
  source: Pick<sources, 'id' | 'name'>;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
interface INews {
  status: stat;
  totalResults: number;
  articles: articles[];
}

type sources = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};
interface ISource {
  status: stat;
  sources: sources[];
}

type html = HTMLElement | null;

interface IApp {
  controller: AppController;
  view: AppView;
  start(): void;
}

type options = { apiKey: string } | { sources: string } | object;

interface ILoader {
  baseLink: string;
  options: options;
}

interface IAppView {
  news: News;
  sources: Sources;
}

export { articles, INews, ISource, IApp, ILoader, IAppView, sources, options, err, html };
