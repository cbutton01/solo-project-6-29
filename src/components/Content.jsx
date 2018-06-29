import React from 'react';
import Article from './Article';

const CONTENT_BOX = {
  backgroundColor: '#ccc'
}

const ARTICLE_LIST = [
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image'
  }
]

function Content(){
  return(
    <div style={CONTENT_BOX}>
      Content
      <div>
        {
          ARTICLE_LIST.map((article, index) =>
          <Article tag={article.tag}
            image={article.image}
            alt={article.alt}
            />
        )}
      </div>
    </div>
  );
}

export default Content;
