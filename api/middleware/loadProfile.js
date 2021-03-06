import Profile from '../models/Profile.js';
import asyncHandler from './asyncHandler.js';
import ErrorResponse from './ErrorResponse.js';

const loadProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    sub: req.sub,
  });

  if (!profile) {
    return next(new ErrorResponse('Profile not found', 404));
  }

  req.profile = profile;

  next();
});

export default loadProfile;
