const router = require('express').Router();
const { getProfiles, getProfile } = require('./controllers/read');
const { createProfile } = require('./controllers/create');

router.route('/').get(getProfiles).post(createProfile);

module.exports = router;
