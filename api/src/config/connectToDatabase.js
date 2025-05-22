import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connectionResponse = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${connectionResponse.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Connection Error: ${error}`);
  }
};

export default connectToDatabase;