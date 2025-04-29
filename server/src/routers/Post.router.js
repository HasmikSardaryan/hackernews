import express from "express";
import { create_post, get_posts } from "../contollers/Post.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import Post from "../schemas/Post.js";

const PostRouter = express.Router();

PostRouter.get("/posts", get_posts);
PostRouter.post("/submit", verifyToken, create_post);
export default PostRouter;
