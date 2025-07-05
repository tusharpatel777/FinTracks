
import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx'; // Make sure this is .jsx

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const { login, token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
     
        <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
           
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Account Login</h1>
            
           
            {error && <p className="bg-red-200 text-red-800 p-3 rounded mb-4 dark:bg-red-900/50 dark:text-red-300">{error}</p>}
            
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                  
                    <label className="block text-gray-700 dark:text-gray-300">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                       
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                    />
                </div>
                <div className="mb-6">
                    
                    <label className="block text-gray-700 dark:text-gray-300">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Login
                </button>
            </form>
            
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                Don't have an account? <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">Register here</Link>
            </p>
        </div>
    );
}

export default Login;