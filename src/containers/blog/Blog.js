import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './Blog.css';

const Blog = () => {
    return (
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Sep 26, 2021" text="What is NFT and its collections ?" />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" text="Metaverse is the future. Let us exlore how it is?" />
            <Article imgUrl={blog03} date="Sep 26, 2021" text="What is Web3.0?" />
            <Article imgUrl={blog04} date="Sep 26, 2021" text="What is future?" />
            <Article imgUrl={blog05} date="Sep 26, 2021" text="Solana is future ?" />
          </div>
        </div>
      </div>
    )
}

export default Blog
