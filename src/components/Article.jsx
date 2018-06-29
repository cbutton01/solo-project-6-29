import React from 'react';
import PropTypes from 'prop-types';

const TAG = {
  postion: 'absolute',
  backgroundColor: '#DC191B',
  width: '5%',
  color: 'white'
}

const THUMBNAIL = {
  display: 'flex'
}


function Article(props){
  return(
    <div>
        <h5 style={TAG}>{props.tag}</h5>
        <img src={props.image} alt={props.alt}/>
        <h3>{props.headline}</h3>
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
