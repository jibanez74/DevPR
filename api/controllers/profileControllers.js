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

// return a user's profile
export const getProfile = (req, res) =>
  res.status(200).json({
    success: true,
    profile: req.profile,
  });

// edit or create a profile
export const editProfile = asyncHandler(async (req, res, next) => {
  // will update a profile if it exist, otherwise it will create it
  const profile = await Profile.findOneAndUpdate(
    { sub: req.sub },
    { $set: req.body },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  console.log(profile);

  res.status(201).json({
    success: true,
    profile,
  });
});
