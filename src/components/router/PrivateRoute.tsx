import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LOGIN } from '../../config';

export const PrivateRoute = () => {
    const {isAuthenticated, user} = useAuth0();
    console.log(isAuthenticated)
    console.log(user)
    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}