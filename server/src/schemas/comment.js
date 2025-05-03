import mongoose, { now } from 'mongoose';

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    time: { 
        type: Date,
        default: Date.now
    },
    
    children: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }
});

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;
