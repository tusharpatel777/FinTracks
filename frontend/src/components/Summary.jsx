
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext.jsx'; // Ensure .jsx
// import T

function Summary() {
    const { transactions } = useContext(TransactionContext);

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0)
        .toFixed(2);

    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0)
        .toFixed(2);

    return (
        // --- Updated Main Container ---
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div>
                {/* --- Updated Heading --- */}
                <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase">Income</h3>
                {/* --- Updated Amount --- */}
                <p className="text-2xl font-bold text-green-600 dark:text-green-500">+${totalIncome}</p>
            </div>
            {/* --- Updated Border --- */}
            <div className="border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pl-0 md:pl-4 pt-4 md:pt-0">
                {/* --- Updated Heading --- */}
                <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase">Expense</h3>
                {/* --- Updated Amount --- */}
                <p className="text-2xl font-bold text-red-600 dark:text-red-500">-${totalExpense}</p>
            </div>
        </div>
    );
}

export default Summary;