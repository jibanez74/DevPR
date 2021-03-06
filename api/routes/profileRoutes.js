import express from 'express';
import {
  getProfiles,
  getProfile,
  editProfile,
} from '../controllers/profileControllers.js';
import auth from '../middleware/auth.js';
import loadProfile from '../middleware/loadProfile.js';

const router = express.Router();

router.route('/').get(getProfiles).put(auth, editProfile);

router.get('/me', auth, loadProfile, getProfile);

export default router;
