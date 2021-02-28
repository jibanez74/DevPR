const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('Db connected');
  } catch (error) {
    console.error(error.message);
  }
};
