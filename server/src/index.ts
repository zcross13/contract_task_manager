import express, { Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes'
import contract from "./routes/contractRoutes"



dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', userRoutes)
app.use('/api', contract)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});