import express from 'express';
import Post from '../schemas/post.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const routerSubmit = express.Router();

routerSubmit.post('/submit', verifyToken, async (req, res) => {
  try {
    const { title, url, text } = req.body;
      const post = new Post({ title, url, text});
    await post.save();
      res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
      res.status(500).json({ error: 'Failed to create post' });
  }
});

export default routerSubmit;
