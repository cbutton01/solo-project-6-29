import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

const CONTENT_BOX = {
  backgroundColor: '#ccc',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr'
}

const THUMBNAIL_STORIES = {
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fit, minmax(80px, 1fr))',
}

const ARTICLE_LIST = [
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image',
    headline: 'This is the Headline'
  },
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image',
    headline: 'This is the Headline'
  },
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image',
    headline: 'This is the Headline'
  }
]

function Content(){
  return(
    <div style={CONTENT_BOX}>
      <div style={THUMBNAIL_STORIES}>
        {
          ARTICLE_LIST.map((article, index) =>
          <Article tag={article.tag}
            image={article.image}
            alt={article.alt}
            headline={article.headline}
            key={index}
            />
        )}
      </div>
      <div>
        <h2>News Feed</h2>
        {
          ARTICLE_LIST.map((article, index) =>
          <Link to='#'>
          <h3>{article.headline}</h3>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Content;
