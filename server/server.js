import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './src/routes/users.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(bodyParser.json());
app.use(router);
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

  