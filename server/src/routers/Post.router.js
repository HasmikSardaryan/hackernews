import express from "express";
import { create_post, get_posts, get_user, get_post, create_comment, get_comments} from "../contollers/Post.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const PostRouter = express.Router();

PostRouter.get("/posts", get_posts);
PostRouter.get("/user/:id", get_user);
PostRouter.get("/comments/:id", get_comments);
PostRouter.post("/submit", verifyToken, create_post);
PostRouter.get("/comments/post/:postId", get_post);
PostRouter.post('/comments/:id',verifyToken, create_comment);

export default PostRouter;
