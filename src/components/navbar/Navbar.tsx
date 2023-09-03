import {Link} from 'react-router-dom';
import {HOME, PROFILE} from '../../config';
import {NavbarStyles} from './Navbar.styles';
import {useAuth0} from '@auth0/auth0-react';

export const Navbar = () => {
	const {loginWithRedirect, logout, user, isLoading, isAuthenticated} = useAuth0();

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
							<div className="navbar__divButtonProfile"><Link to={PROFILE} className="profile-link">+</Link>
							</div>
							<div className="navbar__divButtonProfile"><Link to={PROFILE} className="profile-link">Profile</Link>
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
