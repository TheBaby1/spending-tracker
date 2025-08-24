import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    connectDb();
    console.log('Server is running on http://localhost:3001');
})