import { useState, useEffect } from "react";

const useComment = (commentId, PostId) => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!commentId) return;

    fetch(`http://localhost:3000/comment/${commentId}`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, [commentId]);
  
  return { comment, loading, PostId};
};

export default useComment;
