import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { PRIVATE } from '../../config';


export const PublicRoute = () => {
    const {isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}