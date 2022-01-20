import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p  onClick={() => window.location = 'https://medium.com/building-the-metaverse/web3-interoperability-and-the-metaverse-5b252dc39da'}>Read Full Article</p>
      </div>
  </div>
  );
}

export default Article
