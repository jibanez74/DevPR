import express from 'express';
import helmet from 'helmet';
import connectDb from './config/db.js';
import errorHandler from './middleware/error.js';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import keys from './config/keys.js';

import profileRoutes from './routes/profileRoutes.js';

// connect to mongo
connectDb();

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
// app.use('/profile', profileRoutes);

// test route
app.get('/', (req, res) => res.send('hello world'));

// handle uncought errors
app.use(errorHandler);

// listen for connection
app.listen(keys.port, () =>
  console.log(
    `DevPR API is now running in ${process.env.NODE_ENV} mode on port ${keys.port}`
  )
);

// handle global promise rejection
process.on('unhandledRejection', (err, promise) =>
  console.error(`Error: ${err.message}`)
);
