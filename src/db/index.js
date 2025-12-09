import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected sucessfully");
  } catch (error) {
    console.error("❌ MongoDB connection Faliure", error);
    process.exit(1);
  }
};

export default ConnectDB;
