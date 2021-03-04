import CognitoExpress from 'cognito-express';
import { decode } from 'jsonwebtoken';
import { promisify } from 'util';
import keys from './keys.js';

export const decodeToken = promisify(decode);

export const validator = new CognitoExpress({
  region: keys.awsRegion,
  cognitoUserPoolId: keys.cognitoPoolId,
  tokenUse: 'access', //Possible Values: access | id
  tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
});
