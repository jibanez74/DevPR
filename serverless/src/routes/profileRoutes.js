const router = require('express').Router();
const {
  getProfiles,
  getProfile,
  editProfile,
} = require('../controllers/profileControllers');
const auth = require('../middleware/asyncHandler');

router.route('/').get(getProfiles).put(auth, editProfile);

router.get('/me', auth, getProfile);

module.exports = router;
