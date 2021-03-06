import CognitoExpress from 'cognito-express';
import keys from './keys.js';

const cognitoExpress = new CognitoExpress({
  region: keys.awsRegion,
  cognitoUserPoolId: keys.cognitoPoolId,
  tokenUse: 'access', //Possible Values: access | id
  tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
});

export default cognitoExpress;
