import express from "express";
import { create_post, get_posts, get_user} from "../contollers/Post.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const PostRouter = express.Router();

PostRouter.get("/posts", get_posts);
PostRouter.get("/user/:id", get_user);
PostRouter.post("/submit", verifyToken, create_post);
export default PostRouter;
