import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../../Components/Posts/Posts';
import { formatDistanceToNow } from 'date-fns'
import Header from '../../Header/Header';

const Comments = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);


useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postRes = await fetch(`http://localhost:3000/comments/${postId}`);
        const postData = await postRes.json();
        setPost(postData);

        // const commentsRes = await fetch(`http://localhost:3000/posts/${postId}/comments`);
        // const commentsData = await commentsRes.json();
        // setComments(commentsData);
      } catch (err) {
        console.error("Error loading post and comments", err);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  return (
    <div className="homepage">
      <Header/>
      {post && (
        <Post
          key={post._id}
          _id={post._id}
          rank={null}
          title={post.title}
          domain={post.url}
          points={post.points}
          author={post.author}
          time={formatDistanceToNow(new Date(post.time), { addSuffix: true })}
          comments={post.comments.length}
        />
      )}
  
      <h3>Comments:</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map(comment => (
          <div key={comment._id} className="comment">
            <strong>{comment.author.username}:</strong> {comment.text}
          </div>
        ))
      )}
    </div>
  );
};  

export default Comments;

