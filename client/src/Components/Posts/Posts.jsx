import React from 'react';
import { Link } from "react-router-dom";
import useUser from '../../hooks/useUser';
import './Posts.css'

const Post = ({ rank, title, domain, points, author, time, comments }) => {
  const handleClick = () => {
    useUser(author._id);
  };
  return (
    <div className="post">
      <div className="post-rank">{rank}.</div>
      <div className="post-content">
        <div className='title'>
          <Link className="post-title">{title}</Link>
          <span className="post-domain">({domain})</span>
        </div>
        <div className="post-meta">
          <Link to={`/user/${author._id}`} className='link' onClick={handleClick}>{author.username}</Link>
            <Link className='link'> {time} </Link>|
            <Link className='link'> hide </Link>|
            <Link to='/comments' className='link'> {comments} comments</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;