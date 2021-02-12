const router = require('express').Router();
const { getProfile, getProfiles } = require('./controllers/read');
const createProfile = require('./controllers/create');
const updateProfile = require('./controllers/update');

/*
  description: will crate a new profile
  access: private
*/
router.post('/', createProfile);

/*
  description: will get all available profiles with pagination
  access: public
*/
router.get('/', getProfiles);

/*
  description: will get a single profile by id
  access: public
*/
router.get('/:id', getProfile);

/*
  description: will update a profile
  access: private
*/
router.put('/', updateProfile);

module.exports = router;
