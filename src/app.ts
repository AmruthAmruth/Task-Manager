import express from 'express'
import dotenv from "dotenv";
import authRoutes from "./modules/auth/routes";
import { connectDB } from './config/db';

dotenv.config();

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes); 

connectDB();
 
export default app;