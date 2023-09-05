import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage, LoginPage, PrivatePage, ProfilePage, SignUpPage} from '../pages';
import {HOME, LOGIN, PRIVATE, PROFILE, SIGNUP} from '../config';
import {Navbar, PrivateRoute, PublicRoute} from '../components';
import { UserProvider } from '../context/userContext';

export const RouterPaths = () => {
	return (
		<UserProvider>
		<BrowserRouter>
		<Navbar />
			<Routes>
				<Route path={HOME} element={<PublicRoute />}>
					<Route index element={<HomePage />} />
					<Route path={LOGIN} element={<LoginPage />} />
					<Route path={SIGNUP} element={<SignUpPage />} />
				</Route>
				<Route path={PRIVATE} element={<PrivateRoute />}>
					<Route index element={<PrivatePage />} />
					<Route path={PROFILE} element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
		</UserProvider>
	);
};
