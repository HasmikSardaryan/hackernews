import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        trim: true
    }, 
    author: {
        type: String,
        default: ''
    },
    rank: {
        type: Number,
        default: 0
    }

    // rank, title, domain, points, author, time, comments
});

const Post = mongoose.model('Post', postSchema);
export default Post;
