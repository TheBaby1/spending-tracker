import express from 'express';
import { createSpending } from "../controllers/spending.controller.js";
import { getAllSpending } from '../controllers/spending.controller.js';

const router = express.Router();

router.post('/create-spending', createSpending);
router.get('/get-all-spendings', getAllSpending);

export default router;