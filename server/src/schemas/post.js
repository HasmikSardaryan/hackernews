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
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  rank: {
    type: Number,
    default: 0
  }

    // rank, title, domain, points, author, time, comments
});

const Post = mongoose.model('Post', postSchema);
export default Post;
