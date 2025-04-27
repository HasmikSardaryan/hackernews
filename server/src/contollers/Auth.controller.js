import User from "../schemas/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;

export const register_post = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error during registration" });
  }
};


export const login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Incorrect password' });
      }
      const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
        expiresIn: '1h',
      });

      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      });
      console.log(token);
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ error: 'Server error during login' });
    }
}

// export const logout_post = (req, res) => {
//   try {
//     res.clearCookie('token', {
//       httpOnly: true,
//       sameSite: 'lax',
//     });
//     res.status(200).json({ message: 'Logout successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error during logout' });
//   }
// };


export const auth_check = async (req, res) => {
    try {
        const token = req.cookies.token; // get token from cookies

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const decoded = jwt.verify(token, JWT_SECRET); // verify token
        res.status(200).json({ user: { id: decoded.id, username: decoded.username } });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

