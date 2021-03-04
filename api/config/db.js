import mongoose from 'mongoose';
import keys from './keys.js';

const connectDb = async () => {
  const con = await mongoose.connect(keys.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log('Db connected');
};

export default connectDb;
