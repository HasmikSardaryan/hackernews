import React from 'react';
import { Link } from "react-router-dom";


const JobPost = ({ rank, title, domain, time}) => {
  return (
    <div className="post">
      <div className="post-rank">{rank}.</div>
      <div className="post-content">
        <div className='title'>
          <Link className="post-title">{title}</Link>
          <span className="post-domain">({domain})</span>
        </div>
        <div className="post-meta">
            <Link className='link'>{time} ago</Link>
        </div>
      </div>
    </div>
  );
};

export default JobPost;