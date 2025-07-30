import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config()

const mongoURI = process.env.MONGO_URI; 

if (!mongoURI){
    throw new Error("MONGO_URI is not defined in your .env file")
}

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection error:", error)
        process.exit(1)
    }
}


