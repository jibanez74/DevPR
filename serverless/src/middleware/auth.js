const { validator, decodeToken } = require('../config/cognito');
const ErrorResponse = require('./error');
const asyncHandler = require('./asyncHandler');

// middleware to validate access token, decode info and place the user's data into the req.user object
module.exports = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized', 401));
  }

  await validator.validate(token);

  req.user = await decodeToken(token, {
    complete: true,
  });

  next();
});
