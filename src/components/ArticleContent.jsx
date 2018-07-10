import React from 'react';
import PropTypes from 'prop-types';

function ArticleContent(props){
  return(<section>
    <p>{props.story}</p>
  </section>);
}

ArticleContent.propTypes = {
  story: PropTypes.string
};

export default ArticleContent;
