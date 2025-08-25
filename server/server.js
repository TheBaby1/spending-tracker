import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from "./config/db.js";
import spendingRoutes from './routes/spending.routes.js';
import healthCheckRoute from './routes/health.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', spendingRoutes);
app.use('/', healthCheckRoute);

app.listen(3001, () => {
    connectDb();
    console.log('Server is running on http://localhost:3001');
})