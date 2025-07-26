// index.ts

// In production, always keep sensitive information like database URI and API keys in .env file
// and load it using dotenv before any other configuration
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes';
import contract from "./routes/contractRoutes";
import { connectDB } from "../config/connectDB";

// Load environment variables
// .env file must contain MONGO_URI and PORT (optional, defaults to 3000)
dotenv.config();

// Connect to MongoDB
// Make sure MONGO_URI is defined in .env or the app will crash
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware: parses incoming requests with JSON payloads
// Required for accessing req.body in POST and PUT routes
app.use(express.json());

// Route handling
// Prefix all user routes and contract routes with /api for versioning/future scaling
app.use('/api', userRoutes);
app.use('/api', contract);

// Start server
// Useful log to confirm server is running and which port it's on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
