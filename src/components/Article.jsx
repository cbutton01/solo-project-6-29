import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <section>
      <style jsx>
        {`
          section {
            display: flex;
            margin: 5px;
            font-family: sans-serif;
            color: white;
            flex-direction: column;
          }

          h5 {
            height: 1em;
            position: absolute;
            background-color: #DC191B;
            width: 5%;
          }

          h3 {
            background-color: black;
            position:;
          }
          `}
        </style>
        <h5>{props.tag}</h5>
        <img src={props.image} alt={props.alt}/>
        <h3>{props.headline}</h3>
      </section>
    );
  }

  Article.propTypes = {
    tag: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    headline: PropTypes.string
  };

  export default Article;
