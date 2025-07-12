
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx'; // <-- Import ThemeProvider
import { AuthProvider } from './context/AuthContext.jsx';
import { TransactionProvider } from './context/TransactionContext.jsx';
// import { AuthProvider } from './context/AuthContext.jsx';

// import Header from './components/Header';
import Header from './components/header.jsx';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import Header from './components/Header';

function App() {
  return (
    // Wrap everything in the ThemeProvider
    <ThemeProvider> 
      <AuthProvider>
        <TransactionProvider>
          {/* Apply dark mode classes to the main background */}
          <div className="bg-slate-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </TransactionProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;