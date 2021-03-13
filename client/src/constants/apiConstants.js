const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/v1'
    : 'http://localhost:3000/dev';

export default API_URL;
