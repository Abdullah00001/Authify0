import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI_PRODUCTION || process.env.MONGODB_URI_DEV;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`\nDatabase Connected`);
  } catch (error) {
    console.error(
      `Database Connection Failed\nError Message : ${error.message}`,
    );
  }
};

export default connect;
