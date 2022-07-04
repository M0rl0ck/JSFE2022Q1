enum stat {
  ok = 'ok',
  console = 'error',
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

export { articles, INews, ISource, sources, html };
