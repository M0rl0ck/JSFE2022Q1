type articles = {
  source: {
    id: string;
    name: string
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string
}
interface INews {
  status: string;
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
}
interface ISource {
  status: string;
  sources: sources[];
}

type html = HTMLElement | null

export {articles, INews, ISource, sources, html}