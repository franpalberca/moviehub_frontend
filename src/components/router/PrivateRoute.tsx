import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LOGIN } from '../../config';

export const PrivateRoute = () => {
    const {isAuthenticated} = useAuth0();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}