import React from "react";
import Header from "../../Header/Header";
import Post from "../Posts/Posts";
import { useEffect } from "react";
import { useState } from "react";
import './HomePage.css'

function HomePage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
    }, []);

    return (
        <div className="homepage">
        <Header/>
        <Post
        rank={1}
        title="Manufactured Consensus on X.com"
        domain="rook2root.co"
        points={168}
        author="cogitovirus"
        time="2 hours"
        comments={90}
        />
        {posts.map((post, index) => (
        <Post
          key={post.id}
          rank={index + 2}
          title={post.title}
          domain={post.url}
          points={post.points}
          author={post.author}
          time={post.time}
          comments={post.comments}
        />
      ))}

        </div>
    )
}

export default HomePage;