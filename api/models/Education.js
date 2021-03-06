import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    trim: true,
    minLength: [2, 'School must be at least 2 characters long'],
    maxLength: [100, 'School must not be longer than 100 characters'],
    required: [true, 'School is required'],
  },

  degree: {
    type: String,
    minLength: [2, 'Degree must be at least 2 characters long'],
    maxLength: [60, 'Degree must not be longer than 60 characters'],
    trim: true,
    required: [true, 'Degree is required'],
  },

  fieldOfStudy: {
    type: String,
    minLength: [2, 'Field of study must be at least 2 characters long'],
    maxLength: [60, 'Field of study must not be longer than 60 characters'],
    required: [true, 'Field of study is required'],
    trim: true,
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
    minLength: [4, 'Description must be at least 4 characters long'],
    maxLength: [500, 'Description must not be longer than 500 characters'],
  },
});

const Education = mongoose.model('Education', EducationSchema);

export default Education;
