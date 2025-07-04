// import React, { useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import Balance from '../components/Balance';
// import Summary from '../components/Summary';
// import TransactionForm from '../components/TransactionForm';
// import TransactionList from '../components/TransactionList';

// function Dashboard() {
//     const { user } = useContext(AuthContext);

//     return (
//         <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                 Welcome, <span className="text-blue-600">{user?.name}!</span>
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Main Content: Balance, Summary, Form */}
//                 <div className="md:col-span-2 space-y-8">
//                     <div>
//                         <Balance />
//                         <Summary />
//                     </div>
//                     <TransactionForm />
//                 </div>

//                 {/* Sidebar: Transaction List */}
//                 <div className="md:col-span-1">
//                     <TransactionList />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext.jsx'; // Make sure this is .jsx
import Balance from '../components/Balance';
import Summary from '../components/Summary';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {/* --- Updated Welcome Heading --- */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Welcome, <span className="text-blue-600 dark:text-blue-400">{user?.name}!</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content: Balance, Summary, Form */}
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <Balance />
                        <Summary />
                    </div>
                    <TransactionForm />
                </div>

                {/* Sidebar: Transaction List */}
                <div className="md:col-span-1">
                    <TransactionList />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;