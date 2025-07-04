import express from 'express';
const router = express.Router();
import { getTransactions, addTransaction, deleteTransaction } from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/')
    .get(protect, getTransactions)
    .post(protect, addTransaction);

router.route('/:id')
    .delete(protect, deleteTransaction);

export default router;