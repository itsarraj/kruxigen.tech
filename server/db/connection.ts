import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase'; // Provide a default value if MONGO_URI is not defined

    const conn = await mongoose.connect(mongoURI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();
