import devKeys from './dev.js';
import prodKeys from './prod.js';

const mode = process.env.NODE_ENV;
let keys;

if (mode === 'development') {
  keys = devKeys;
} else if (mode === 'production') {
  keys = prodKeys;
} else {
  process.env.NODE_ENV = 'development';
  keys = devKeys;
}

export default keys;
