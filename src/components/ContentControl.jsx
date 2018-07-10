import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';


const ARTICLE_LIST = [
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image',
    headline: 'This is the Headline',
    story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image',
    headline: 'This is the Headline',
    story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    tag: 'News',
    image: 'https://cdn.mos.cms.futurecdn.net/xdcPtestjJHLDAJEgWhDeR-600-80.jpg',
    alt: 'this is an image',
    headline: 'This is the Headline',
    story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

class  ContentControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      articleIsShowing: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
      <section>
        <style jsx>
          {`
            section {
              background-color: #ccc;
              display: grid;
              grid-template-columns: 2fr 1fr;
              grid-gap: 20px;
            }


            .thumbnail {
              display: grid;
              grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));
            }
            `}
        </style>
        <div className="thumbnail" onClick=(this.handleClick)>
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
          <h2>News Stream</h2>
          {
            ARTICLE_LIST.map((article, index) =>
              <Link to='#'>
                <h3>{article.headline}</h3>
              </Link>
            )}
        </div>
      </section>
    );
  }
}

export default ContentControl;
