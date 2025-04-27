import express from 'express';
import { register_post, login_post, auth_check } from '../contollers/Auth.controller.js';
import User from '../schemas/user.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const AuthRouter = express.Router();

AuthRouter.get('/', verifyToken, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    console.log(user , 'from auth router');
    res.json({ user });
});
  
AuthRouter.post('/register', register_post);

AuthRouter.post('/login', login_post);
// AuthRouter.post('/logout', logout_post);


export default AuthRouter;

