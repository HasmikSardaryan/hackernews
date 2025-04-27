import Post from "../schemas/Post.js";

export const create_post = async (req, res) => {
    try {
      const { title, url, text } = req.body;
      const post = new Post({ title, url, text });
      await post.save();
      res.status(201).json({ message: "Post created successfully", post });
    } catch (error) {
      res.status(500).json({ error: "Failed to create post" });
    }
};

export const get_posts = async (req, res) => {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      res.status(500).json({ error: "Server Error" });
    }
  }
