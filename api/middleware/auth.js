import cognitoExpress from '../config/cognito.js';
import ErrorResponse from './ErrorResponse.js';

// middleware to validate access token, decode info and place the user's data into the req.user object
const auth = async (req, res, next) => {
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

  try {
    const { sub } = await cognitoExpress.validate(token);

    req.sub = sub;

    next();
  } catch (error) {
    if (process.env.NODE_ENV) {
      console.error(`Cognito error \n ${error}`);
    }

    next(new ErrorResponse('Not authorized', 401));
  }
};

export default auth;
