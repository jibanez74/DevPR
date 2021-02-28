const CognitoExpress = require('cognito-express');
const { decode } = require('jsonwebtoken');
const { promisify } = require('util');

const decodeToken = promisify(decode);

const validator = new CognitoExpress({
  region: process.env.REGION,
  cognitoUserPoolId: process.env.COGNITO_POOL_ID,
  tokenUse: 'access', //Possible Values: access | id
  tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
});

module.exports = {
  validator,
  decodeToken,
};
