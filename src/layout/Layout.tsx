import { Outlet } from 'react-router-dom'
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {postApi} from "../api/postApi";
import { Footer} from "../components";
import { RouterPaths } from '../routes/RouterPaths.routes';

const url = 'http://localhost:8080/public/users'

const Layout = () => {
    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        if (user) {
            postApi(url, user, getAccessTokenSilently)
        }
    }, [user])

    return (
        <>

            <RouterPaths />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout;