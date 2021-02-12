const express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const errorHandler = require('./helpers/error');
const routes = require('./routes');

// load env vars
require('dotenv').config({ path: './config/config.env' });

// connect to db
require('./config/db')();

// declare a new express app
const app = express();

// list of middleware
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// set routes
app.use('/api/v1/profile', routes);

/*
  middleware will handle api errors
  must be placed after all routes
*/
app.use(errorHandler);

// listen for connection
app.listen(
  process.env.PORT,
  console.log(
    `Profile api is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);

// handle global promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
