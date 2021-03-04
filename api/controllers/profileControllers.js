import Profile from '../models/Profile.js';
import ErrorResponse from '../middleware/ErrorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';

// get all profiles with pagination
export const getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();

  if (!profiles || profiles.length < 1) {
    return next(new ErrorResponse('No profiles', 404));
  }

  res.status(200).json({
    success: true,
    profiles,
  });
});

// get a profile by cognito sub
export const getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    sub: req.params.sub,
  });

  if (!profile) {
    return next(
      new ErrorResponse(`No profile found with the sub ${req.params.sub}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    profile,
  });
});

// edit or create a profile
export const editProfile = asyncHandler(async (req, res, next) => {
  const { profileData } = req.body;

  // will update a profile if it exist, otherwise it will create it
  const profile = await Profile.findOneAndUpdate(
    { sub: profileData.sub },
    { $set: profileData },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  res.status(201).json({
    success: true,
    profile,
  });
});
