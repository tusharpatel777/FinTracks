import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);

    const API_URL = 'https://fintracks.onrender.com/api/transactions';

    useEffect(() => {
        if (token) {
            getTransactions();
        } else {
            setTransactions([]); // Clear transactions if no token
            setLoading(false);
        }
    }, [token]);

    const getTransactions = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL);
            setTransactions(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error fetching transactions');
        } finally {
            setLoading(false);
        }
    };

    const addTransaction = async (transactionData) => {
        try {
            const response = await axios.post(API_URL, transactionData);
            setTransactions([response.data, ...transactions]);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error adding transaction');
            throw err; // Re-throw to handle in component
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setTransactions(transactions.filter((t) => t._id !== id));
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error deleting transaction');
        }
    };

    return (
        <TransactionContext.Provider value={{ transactions, loading, error, getTransactions, addTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};

export default TransactionContext;