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
export interface INews {
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
export interface ISource {
  status: string;
  sources: sources[];
}