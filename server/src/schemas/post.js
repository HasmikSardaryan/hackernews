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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  time: { 
    type: Date,
    default: Date.now
  },
  rank: {
    type: Number,
    default: 0
  },  
});

const Post = mongoose.model('Post', postSchema);
export default Post;
