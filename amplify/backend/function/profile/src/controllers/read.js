const ErrorResponse = require('../helpers/ErrorResponse');
const asyncHandler = require('../helpers/asyncHandler');
const Profile = require('../models/Profile');

// get a profile by id
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    return next(new ErrorResponse('Profile was not found', 404));
  }

  res.status(200).json({
    success: true,
    profile,
  });
});

// get all available profiles with pagination
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();

  if (!profiles) {
    return next(new ErrorResponse('No profiles available', 404));
  }

  res.status(200).json({
    success: true,
    profiles,
  });
});
