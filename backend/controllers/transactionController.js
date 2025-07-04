import Transaction from '../models/Transaction.js';

// @desc    Get all transactions for a user
// @route   GET /api/transactions
// @access  Private
const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add a new transaction
// @route   POST /api/transactions
// @access  Private
const addTransaction = async (req, res) => {
    const { type, category, amount, date, description } = req.body;

    try {
        const newTransaction = new Transaction({
            user: req.user.id,
            type,
            category,
            amount,
            date,
            description,
        });

        const transaction = await newTransaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: 'Please add all required fields', error: error.message });
    }
};

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Private
const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        // Make sure user owns the transaction
        if (transaction.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await transaction.deleteOne();

        res.json({ id: req.params.id, message: 'Transaction removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export { getTransactions, addTransaction, deleteTransaction };