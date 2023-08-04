import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../config/context/AuthContext';
import { LOGIN } from '../../config';

export const PrivateRoute = () => {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}