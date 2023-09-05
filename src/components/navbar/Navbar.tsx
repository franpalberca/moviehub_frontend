import {Link} from 'react-router-dom';
import {HOME, PROFILE} from '../../config';
import {NavbarStyles} from './navbar.styles';
import {useAuth0} from '@auth0/auth0-react';
import {ModalCreationMovies} from '../modal/ModalCreationMovies';

export const Navbar = () => {
	const {loginWithRedirect, logout, user, isLoading, isAuthenticated, getAccessTokenSilently} = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<NavbarStyles>
			<div className="navbar">
				<div className="navbar__links">
					<div className="navbar__links-left">
						<Link to={HOME}>MOVIE'S TIME</Link>
					</div>
					{isAuthenticated ? <h3 className="navbar__links-right__welcome">Welcome {user?.name}</h3> : <h3 className="navbar__links-right__welcome">Please log in</h3>}
					<div className="navbar__links-right">
						{isAuthenticated ? (
							<>
								<ModalCreationMovies getToken={() => getAccessTokenSilently()} />
								<div className="navbar__divButtonProfile">
									<Link to={PROFILE} className="profile-link">
										Profile
									</Link>
								</div>
								<div onClick={() => logout()} className="navbar__divButtonSignUp">
									Logout
								</div>
							</>
						) : (
							<div onClick={() => loginWithRedirect()} className="navbar__divButtonSignUp">
								Login
							</div>
						)}
					</div>
				</div>
			</div>
		</NavbarStyles>
	);
};
