import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LoginPage, PrivatePage, ProfilePage, SignUpPage} from '../pages';
import {HOME, LOGIN, PRIVATE, SIGNUP} from '../config';
import {PrivateRoute, PublicRoute} from '../components';



export const RouterPaths = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<PublicRoute />}>
					<Route path={LOGIN} element={<LoginPage />} />
					<Route path={SIGNUP} element={<SignUpPage />} />
					<Route path='/home' element={<PrivatePage />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Route>
				<Route path={PRIVATE} element={<PrivateRoute />}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
