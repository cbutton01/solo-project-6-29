import React from 'react';
import ProptTypes from 'prop-types';

const TAG = {
  postion: 'absolute'
}


function Article(props){
  return(
    <div>
      <div>
        <h5 style={TAG}>{props.tag}</h5>
        <img src={props.image} alt={props.alt}>
      </div>
    </div>
  );
}

Article.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
}

export default Article;
