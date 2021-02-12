const asyncHandler = require('../helpers/asyncHandler');
const Profile = require('../models/Profile');

// updates a profile
module.exports = asyncHandler(async (req, res, next) => {
  const data = req.body;

  const profile = await Profile.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
    context: 'query',
  });

  res.status(201).json({
    success: true,
    profile,
  });
});
