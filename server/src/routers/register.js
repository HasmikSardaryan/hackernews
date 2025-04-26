import express from 'express';
import User from "../schemas/user.js";
import bcrypt from 'bcrypt';

const routerRegister = express.Router();

routerRegister.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error during registration' });
  }
});


export default routerRegister;

