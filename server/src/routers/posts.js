import express from 'express';
import Post from '../schemas/post.js';

const routerPost = express.Router();

routerPost.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (err) {
        console.error('Failed to fetch posts:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});

export default routerPost;