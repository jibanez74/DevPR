import express from 'express';
import {
  getProfiles,
  getProfile,
  editProfile,
} from '../controllers/profileControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getProfiles).put(auth, editProfile);

router.route('/:sub').get(getProfile);

export default router;
