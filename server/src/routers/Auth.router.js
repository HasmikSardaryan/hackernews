import express from 'express';
import { register_post, login_post } from '../contollers/Auth.controller.js';

const AuthRouter = express.Router();

AuthRouter.post('/register', register_post);

AuthRouter.post('/login', login_post);


export default AuthRouter;

