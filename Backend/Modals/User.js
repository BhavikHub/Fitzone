const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'Other'
  },
  phone: {
    type: String,
    default: ''
  },
  interestedIn: {
    type: String,
    // enum: ['basic', 'premium', 'elite ', 'training', 'other', null],
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
