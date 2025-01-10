import mongoose from "mongoose";
import { Logger } from "../utils/logger";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI =
      process.env.MONGO_URI || "mongodb://localhost:27017/usersDB";
    await mongoose.connect(mongoURI);
    Logger.info("MongoDB connected successfully!");
  } catch (error) {
    Logger.error("MongoDB connection failed:", error);
    process.exit(1); // Exit process on failure
  }
};

export { connectDB };
