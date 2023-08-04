import {Link} from 'react-router-dom';
import {HOME, LOGIN, SIGNUP} from '../../config';
import {NavbarStyles} from './Navbar.styles';

export const Navbar = () => {
	return (
		<NavbarStyles>
			<div className="navbar">
				<div className="navbar__links">
					<div className="navbar__links-left">
						<Link to={HOME}>MOVIE'S TIME</Link>
					</div>
					<div className="navbar__links-right">
						<Link to={LOGIN}>
							<div className='navbar__divButtonLogin'>Login</div></Link>
						<Link to={SIGNUP}>
							<div>
								<button className='navbar__divButtonSignUp'>Sign up</button></div></Link>
					</div>
				</div>
			</div>
		</NavbarStyles>
	);
};
