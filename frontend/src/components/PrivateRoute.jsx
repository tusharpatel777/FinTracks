import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Spinner from './Spinner';

const PrivateRoute = ({ children }) => {
    const { token, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner />;
    }

    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;