const app = require('./app');
const handler = require('serverless-express/handler');

exports.api = handler(app);
