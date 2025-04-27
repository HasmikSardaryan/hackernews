import express from 'express';
import cors from 'cors'
import AuthRouter from './src/routers/Auth.router.js';
import routerSubmit from './src/routers/submits.js';
import routerPost from './src/routers/posts.js';
import connectToDB from './db.js';
import cookieParser from 'cookie-parser';


connectToDB();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})); 
app.use(express.json());
app.use(cookieParser());
app.use(AuthRouter);
app.use(routerSubmit);
app.use(routerPost);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
