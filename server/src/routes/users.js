import express from 'express';
import User from "../schemas/user.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username);
      const user = new User({ username });
      await user.save();
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ error: 'Username already exists' });
      }
      res.status(500).json({ error: 'Failed to create user'});
    }
  });

  export default router;

