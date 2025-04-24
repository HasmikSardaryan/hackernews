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
    about: {
        type: String,
        default: ''
    }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
