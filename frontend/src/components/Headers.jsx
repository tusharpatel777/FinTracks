
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx'; 
import { FaSignOutAlt, FaUserPlus, FaSignInAlt, FaSun, FaMoon } from 'react-icons/fa';

function Headers() {
    const { user, logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        // Add dark mode styles to the header
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    FinTrack
                </Link>
                <nav>
                    {/* Combine navigation items and the theme toggle */}
                    <ul className="flex items-center space-x-4">
                        {user ? (
                            <li>
                                <button
                                    onClick={onLogout}
                                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                                >
                                    <FaSignOutAlt className="mr-2" /> Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                                        <FaSignInAlt className="mr-2" /> Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                        <FaUserPlus className="mr-2" /> Register
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Theme Toggle Button */}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Headers;