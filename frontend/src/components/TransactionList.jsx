
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext.jsx'; // Ensure .jsx
import { FaTrash } from 'react-icons/fa';
import Spinner from './Spinner';

function TransactionList() {
    const { transactions, deleteTransaction, loading } = useContext(TransactionContext);

    if (loading) return <Spinner />;

    if (transactions.length === 0) {
        return (
            // --- Updated "No Transactions" Message ---
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center text-gray-500 dark:text-gray-400">
                No transactions yet. Add one to get started!
            </div>
        );
    }

    return (
        // --- Updated Main Container ---
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            {/* --- Updated Heading --- */}
            <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4 text-gray-800 dark:text-gray-100">History</h3>
            
            {/* We can use a custom scrollbar for better dark mode aesthetics, but this is a great start */}
            <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {transactions.map(transaction => (
                    <li key={transaction._id}
                        // --- Updated List Item ---
                        className={`flex justify-between items-center p-3 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700/50 ${transaction.type === 'income' ? 'border-r-4 border-green-500' : 'border-r-4 border-red-500'}`}
                    >
                        <div className="flex-grow">
                            {/* --- Updated Text --- */}
                            <p className="font-semibold text-gray-700 dark:text-gray-200">{transaction.category}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.description}</p>
                        </div>
                        <div className="text-right mx-4">
                            {/* --- Updated Amount Text --- */}
                            <span className={`font-bold ${transaction.type === 'income' ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                                {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                            </span>
                             {/* --- Updated Date Text --- */}
                             <p className="text-xs text-gray-400 dark:text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
                        </div>
                        <button
                            onClick={() => deleteTransaction(transaction._id)}
                            // --- Updated Delete Button ---
                            className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition duration-200"
                        >
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;