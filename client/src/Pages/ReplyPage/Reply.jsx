import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Comment from '../../Components/Comment/Comment';
import Header from '../Header/Header';
import './Reply.css'

const ReplyPage = () => {

  const { id } = useParams();
  const [replyText, setReply] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await fetch(`http://localhost:3000/comment/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        });
        const data = await res.json();
        setComment(data);
      } catch (err) {
        console.error("Error loading comment", err);
      }
    };
  
    fetchComment();
  }, [id]);

  const handleReplySubmit = async () => {
    try {
      const res = await fetch(`http://localhost:3000/reply/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ text: replyText })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Reply posted');
      
        navigate(-1); 
      } else {
        if (data.error == 'no token') {
          navigate('/login');
        } else {
          alert(data.error);
        }
      }
    } catch (err) {
      console.error('Error posting reply', err);
    }
  };

  return (
    <div className='homepage'>
    <Header/>
    {comment ? (
  <Comment
    key={comment._id}
    author={comment.author}
    text={comment.text}
    time={comment.time}
    _id={comment._id}
  />
) : (
  <div>Loading comment...</div>
)}
    <div className="reply-parge">
      <textarea
        rows={5}
        value={replyText}
        onChange={(e) => setReply(e.target.value)}
        />
      <br />
      <button className='reply-button'onClick={handleReplySubmit}>reply</button>
    </div>
    </div>
  );
};

export default ReplyPage;
