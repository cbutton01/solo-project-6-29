import React from 'react';
import PropTypes from 'prop-types';

const TAG = {
  postion: 'absolute',
  backgroundColor: '#DC191B',
  width: '5%',
  color: 'white'
}


function Article(props){
  return(
    <div>
      <div>
        <h5 style={TAG}>{props.tag}</h5>
        <img src={props.image} alt={props.alt}/>
      </div>
    </div>
  );
}

Article.propTypes = {
  tag: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string
};

export default Article;
