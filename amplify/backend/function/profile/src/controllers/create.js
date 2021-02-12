const asyncHandler = require('../helpers/asyncHandler');
const Profile = require('../models/Profile');

// creates a new profile
module.exports = asyncHandler(async (req, res, next) => {
  const data = req.body;

  const profile = await Profile.create(data);

  res.status(201).json({
    success: true,
    profile,
  });
});
