import express from 'express';
import { createSpending } from "../controllers/spending.controller.js";

const router = express.Router();

router.post('/create-spending', createSpending);

export default router;