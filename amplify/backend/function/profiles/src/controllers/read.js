const Profile = require('../models/Profile');
const ErrorResponse = require('../middleware/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// get all profiles with pagination
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();

  if (!profiles) {
    return next(new ErrorResponse('There are no profiles in the system', 404));
  }

  res.status(200).json({
    success: true,
    profiles,
  });
});

// get a single profile by the cognito sub
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    sub: req.params.sub,
  });

  if (!profile) {
    return next(new ErrorResponse('No profile available for this user', 404));
  }

  res.status(200).json({
    success: true,
    profile,
  });
});
