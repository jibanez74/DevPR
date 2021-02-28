const express = require('serverless-express/express');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const errorHandler = require('./middleware/error');

const profileRoutes = require('./routes/profileRoutes');

// connect to db
require('./config/db')();

// init instance of express
const app = express();

/* MIDDLEWARE */

// Body parser
app.use(express.json());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS for all methods
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// mount router
app.use('/profile', profileRoutes);

// handle uncought errors
app.use(errorHandler);

// listen for connection
app.listen(process.env.port, () =>
  console.log(
    `Profiles api is now running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);

// handle global promise rejection
process.on('unhandledRejection', (err, promise) =>
  console.log(`Error: ${err.message}`)
);

module.exports = app;
