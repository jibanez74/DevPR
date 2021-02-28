const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: [true, 'Profile ref is required'],
  },

  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minLength: [2, 'Title must be at least 2 characters long'],
    maxLength: [30, 'Title must not be longer than 30 characters'],
  },

  company: {
    type: String,
    required: [true, 'Company is required'],
    maxLength: [60, 'Company must not be longer than 60 characters'],
  },

  location: {
    type: String,
    trim: true,
    minLength: [2, 'Location must be at least 2 characters long'],
    maxLength: [30, 'Location must not be longer than 30 characters'],
  },

  from: {
    type: Date,
    required: [true, 'From date is required'],
  },

  to: Date,

  current: {
    type: Boolean,
    default: false,
  },

  description: {
    type: String,
    trim: true,
    minLength: [4, 'Description must be at least 4 characters long'],
    maxLength: [600, 'Description must not be longer than 600 characters'],
  },
});

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;
