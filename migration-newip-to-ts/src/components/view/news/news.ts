import './news.css';
import { articles, html, err } from '../../../type/interface';

const MAX_NEW_SHOW = 10;

class News {
  public draw(data: articles[]): void {
    const news = data.length >= MAX_NEW_SHOW ? data.filter((_item, idx) => idx < MAX_NEW_SHOW) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    if (!newsItemTemp) {
      throw new Error(err.notEllement);
    }

    news.forEach((item, idx) => {
      const newsClone: HTMLElement = <HTMLElement>newsItemTemp.content.cloneNode(true);

      if (idx % 2) {
        const newsItem = newsClone.querySelector('.news__item');
        if (newsItem) {
          newsItem.classList.add('alt');
      }
        else {
          throw new Error(err.notEllement);
        }
      }
      
      const newsMetaPhoto: html = newsClone.querySelector('.news__meta-photo');
      if (newsMetaPhoto) {
        newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'assets/news_placeholder.jpg'})`;
      } else {
        throw new Error(err.notEllement);
      }
      
      const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
      if (newsMetaAuthor) {
        newsMetaAuthor.textContent = item.author || item.source.name;
      } else {
        throw new Error(err.notEllement);
      }
      
      const newsMetaDate = newsClone.querySelector('.news__meta-date');
      if (newsMetaDate) {
         newsMetaDate.textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');
      } else {
        throw new Error(err.notEllement);
      }

      const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
      if (newsDescriptionTitle) {
        newsDescriptionTitle.textContent = item.title;
      } else {
        throw new Error(err.notEllement);
      }
      
      const newsDescriptionSource = newsClone.querySelector('.news__description-source');
      if (newsDescriptionSource) {
        newsDescriptionSource.textContent = item.source.name;
      } else {
        throw new Error(err.notEllement);
      }
      

      const newsDescriptionContent = newsClone.querySelector('.news__description-content');
      if (newsDescriptionContent) {
        newsDescriptionContent.textContent = item.description;
      } else {
        throw new Error(err.notEllement);
      }
     

      const newsReadMore = newsClone.querySelector('.news__read-more a');
      if (newsReadMore) {
        newsReadMore.setAttribute('href', item.url);
      } else {
        throw new Error(err.notEllement);
      }
      

      fragment.append(newsClone);
    });

    const newsDoc = document.querySelector('.news');
    if (newsDoc) {
      newsDoc.innerHTML = '';
      newsDoc.appendChild(fragment);
    } else {
      throw new Error(err.notEllement);
    }

  }
}

export default News;
