import React from 'react';
import { Link } from "react-router-dom";
import './Posts.css'

const Post = ({ rank, title, domain, points, author, time, comments }) => {
  return (
    <div className="post">
      <div className="post-rank">{rank}.</div>
      <div className="post-content">
        <div className='title'>
          <Link className="post-title">{title}</Link>
          <span className="post-domain">({domain})</span>
        </div>
        <div className="post-meta">
          {points} points by <Link className='link' >{author}</Link>|
            <Link className='link'>{time} ago</Link>|
            <Link className='link'> hide </Link>|
            <Link className='link'> {comments} comments</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;