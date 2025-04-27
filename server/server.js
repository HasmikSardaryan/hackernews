import express from 'express';
import cors from 'cors'
import AuthRouter from './src/routers/Auth.router.js';
import routerSubmit from './src/routers/submits.js';
import routerPost from './src/routers/posts.js';
import cookieParser from 'cookie-parser';
import connectToDB from './db.js';

const app = express();
connectToDB();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
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
