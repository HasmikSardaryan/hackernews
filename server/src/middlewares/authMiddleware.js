import jwt from 'jsonwebtoken';
import 'dotenv/config';


const jwtSecret = process.env.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export function verifyToken(req, res, next) {
  const token = req.cookies?.token;
  console.log('token:', token);
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    console.log('decoded',decoded);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

