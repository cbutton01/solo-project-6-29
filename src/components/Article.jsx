import React from 'react';
import PropTypes from 'prop-types';

const TAG = {
  fontFamily: 'sans-serif',
  height: '1em',
  postion: 'absolute',
  backgroundColor: '#DC191B',
  width: '5%',
  color: 'white'
}

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
    <div style={THUMBNAIL}>
        <h5 style={TAG}>{props.tag}</h5>
        <img src={props.image} alt={props.alt}/>
        <h3 style={HEADLINE}>{props.headline}</h3>
    </div>
  );
}

Article.propTypes = {
  tag: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  headline: PropTypes.string
};

export default Article;
