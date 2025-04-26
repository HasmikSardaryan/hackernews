import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import AuthRouter from './src/routers/Auth.router.js';
import routerSubmit from './src/routers/submits.js';
import routerPost from './src/routers/posts.js';

const app = express();
app.use(cors()); 
app.use(express.json());

app.use(AuthRouter);
app.use(routerSubmit);
app.use(routerPost);

const PORT = process.env.PORT || 3000;

const connectToDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/HackerNews');
        console.log('Connected to MongoDB');
        
    } catch (error) {
        console.log(error);
    }
}

connectToDB();

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
