import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  karma: {
    type: Number,
    default: 0
  },
  about: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  showdead: {
    type: Boolean,
    default: false
  },
  noprocrast: {
    type: Boolean,
    default: false
  },
  maxvisit: {
    type: Number,
    default: 20
  },
  minaway: {
    type: Number,
    default: 180
  },
  delay: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', userSchema);
export default User;
