import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage, LoginPage, PrivatePage, ProfilePage, SignUpPage} from '../pages';
import {HOME, LOGIN, PRIVATE, PROFILE, SIGNUP} from '../config';
import {PrivateRoute, PublicRoute} from '../components';

export const RouterPaths = () => {
	return (
		<BrowserRouter>
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
	);
};
