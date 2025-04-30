import User from "../schemas/User.js";
import Post from "../schemas/Post.js";
import { login_post } from "./Auth.controller.js";

export const create_post = async (req, res) => { 
  const { title, url, text } = req.body;
  
  if (!title || !url) {
    return res.status(400).json({ error: 'Missing title or url' });
  }
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const newPost = new Post({ title, url, author: user._id });
    const savedPost = await newPost.save();

    user.posts.push(savedPost._id);
    await user.save();

    res.status(201).json({ message: 'Post created successfully!', post: savedPost });

  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const get_posts = async (req, res) => {
    try {
      const posts = await Post.find({}).populate("author", "username");
      res.json(posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      res.status(500).json({ error: "Server Error" });
    }
  }

export const get_user = async (req, res) =>  {
  // console.log('uygugyuy');
    try {
      const user = await User.findById(req.params.id).populate("posts");
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Server error' });
    }
};
