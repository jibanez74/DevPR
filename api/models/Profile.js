import mongoose from 'mongoose';
import Experience from './Experience.js';
import Education from './Education.js';

const ProfileSchema = new mongoose.Schema({
  sub: {
    type: String,
    required: [true, 'Cognito sub is required'],
    trim: true,
    unique: true,
  },

  name: {
    type: String,
    minLength: [2, 'Name must be at least 2 characters long'],
    maxLength: [60, 'Name must not be longer than 60 characters'],
    required: [true, 'Name is required'],
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email address',
    ],
    required: [true, 'Email is required'],
  },

  company: {
    type: String,
    trim: true,
    maxLength: [80, 'Company must not be longer than 80 characters'],
  },

  website: {
    type: String,
    trim: true,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Invalid website url',
    ],
  },

  location: {
    type: String,
    trim: true,
    minLength: [2, 'Location must be at least 2 characters long'],
    maxLength: [60, 'Location, must not be longer than 60 characters'],
  },

  status: {
    type: String,
    trim: true,
    required: [true, 'Status is required'],
  },

  skills: {
    type: [String],
    required: [true, 'Skills is required'],
  },

  bio: {
    type: String,
    trim: true,
    maxLength: [800, 'exceeded character limit'],
  },

  githubUsername: {
    type: String,
    trim: true,
    maxLength: [100, 'exceeded character limit'],
  },

  phone: {
    type: String,
    maxLength: [20, 'Invalid phone number'],
    minLength: [7, 'Invalid phone number'],
  },

  experience: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Experience',
    },
  ],

  Education: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Education',
    },
  ],

  facebook: {
    type: String,
  },

  twitter: {
    type: String,
  },

  linkedin: {
    type: String,
  },

  instagram: {
    type: String,
  },

  youtube: {
    type: String,
  },

  twitch: {
    type: String,
  },
});

ProfileSchema.pre('validate', function (next) {
  if (this.skills && this.isModified('skills')) {
    const skills = Array.isArray
      ? this.skills
      : this.skills.split(',').map(skill => ` ${skill.trim()}`);

    this.skills = skills;
  }

  next();
});

const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile;
