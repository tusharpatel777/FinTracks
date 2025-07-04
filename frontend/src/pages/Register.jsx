// import { useState, useContext, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// function Register() {
//     const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
//     const [error, setError] = useState('');
//     const { register, token } = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (token) {
//             navigate('/');
//         }
//     }, [token, navigate]);

//     const { name, email, password, password2 } = formData;

//     const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         if (password !== password2) {
//             setError('Passwords do not match');
//         } else {
//             try {
//                 await register(name, email, password);
//                 navigate('/');
//             } catch (err) {
//                 setError(err.response?.data?.message || 'Registration failed. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg bg-white">
//             <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Account</h1>
//             {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
//             <form onSubmit={onSubmit}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Name</label>
//                     <input
//                         type="text" name="name" value={name} onChange={onChange} required
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Email Address</label>
//                     <input
//                         type="email" name="email" value={email} onChange={onChange} required
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Password</label>
//                     <input
//                         type="password" name="password" value={password} onChange={onChange} required
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700">Confirm Password</label>
//                     <input
//                         type="password" name="password2" value={password2} onChange={onChange} required
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//                     Register
//                 </button>
//             </form>
//             <p className="mt-4 text-center">
//                 Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
//             </p>
//         </div>
//     );
// }

// export default Register;
import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx'; // Make sure this is .jsx

function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
    const [error, setError] = useState('');
    const { register, token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    const { name, email, password, password2 } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setError('Passwords do not match');
        } else {
            try {
                await register(name, email, password);
                navigate('/');
            } catch (err) {
                setError(err.response?.data?.message || 'Registration failed. Please try again.');
            }
        }
    };

    return (
        // --- Updated Container ---
        <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            {/* --- Updated Heading --- */}
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Create Account</h1>
            
            {/* --- Updated Error Message --- */}
            {error && <p className="bg-red-200 text-red-800 p-3 rounded mb-4 dark:bg-red-900/50 dark:text-red-300">{error}</p>}
            
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        type="text" name="name" value={name} onChange={onChange} required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Email Address</label>
                    <input
                        type="email" name="email" value={email} onChange={onChange} required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Password</label>
                    <input
                        type="password" name="password" value={password} onChange={onChange} required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300">Confirm Password</label>
                    <input
                        type="password" name="password2" value={password2} onChange={onChange} required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Register
                </button>
            </form>
             {/* --- Updated Link Text --- */}
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                Already have an account? <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">Login here</Link>
            </p>
        </div>
    );
}

export default Register;