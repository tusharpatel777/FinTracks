
import { useState, useContext } from 'react';
import TransactionContext from '../context/TransactionContext.jsx'; // Make sure this is .jsx

function TransactionForm() {
    const [type, setType] = useState('expense');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const { addTransaction } = useContext(TransactionContext);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!amount || !category) {
            // Consider a more modern notification system than alert() in the future
            alert('Please add amount and category');
            return;
        }

        const newTransaction = {
            type,
            amount: +amount,
            category,
            description
        };

        addTransaction(newTransaction);

        // Reset form
        setAmount('');
        setCategory('');
        setDescription('');
    };

    return (
      
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
           
            <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4 text-gray-800 dark:text-gray-100">
                Add New Transaction
            </h3>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                  
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Transaction Type</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center cursor-pointer">
                           
                            <input
                                type="radio"
                                name="type"
                                value="income"
                                checked={type === 'income'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-radio h-4 w-4 text-green-500 bg-gray-200 border-gray-300 focus:ring-green-500 dark:bg-gray-600 dark:border-gray-500"
                            />
                           
                            <span className="ml-2 text-gray-700 dark:text-gray-300">Income</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="type"
                                value="expense"
                                checked={type === 'expense'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-radio h-4 w-4 text-red-500 bg-gray-200 border-gray-300 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500"
                            />
                            
                            <span className="ml-2 text-gray-700 dark:text-gray-300">Expense</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 dark:text-gray-300">Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}
                        placeholder="e.g., Salary, Food, Bills..."
                    
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700 dark:text-gray-300">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                      
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 dark:text-gray-300">Description (Optional)</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add a note..."
                       
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                    />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;