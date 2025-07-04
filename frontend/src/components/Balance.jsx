
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext.jsx'; // Ensure .jsx

function Balance() {
    const { transactions } = useContext(TransactionContext);

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0);

    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        // --- Updated Main Container ---
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
            {/* --- Updated Heading --- */}
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400 uppercase">Your Balance</h2>
            {/* --- Updated Amount with dynamic dark mode classes --- */}
            <p className={`text-4xl font-bold ${balance >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                ${balance.toFixed(2)}
            </p>
        </div>
    );
}

export default Balance;