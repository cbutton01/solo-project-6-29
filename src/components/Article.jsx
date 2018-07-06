import React from 'react';
import PropTypes from 'prop-types';


const THUMBNAIL = {
  display: 'flex',
  margin: '5px'
}

const HEADLINE = {
  backgroundColor: 'black',
  color: 'white',
  fontFamily: 'sans-serif'
}


function Article(props){
  return(
    <section>
      <style jsx>
        {`
          section {
            display: flex;
            margin: 5px;
            font-family: sans-serif;
          }

          h5 {
            height: 1em;
            postion: absolute;
            background-color: #DC191B;
            width: 5%;
            color: white;
          }
        `}
      </style>
        <h5>{props.tag}</h5>
        <img src={props.image} alt={props.alt}/>
        <h3 style={HEADLINE}>{props.headline}</h3>
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
