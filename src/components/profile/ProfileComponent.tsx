import {useAuth0} from '@auth0/auth0-react';
import { ProfileComponentStyles } from './profileComponent.styles';
import { Footer } from '..';

export const ProfileComponent = () => {
	const {user} = useAuth0();
	return (
		<ProfileComponentStyles>
			<div className="user__info">
		<div className="card__profile">
			<h1>Hello {user?.given_name}</h1>
			<img src={user?.picture} />
		</div>
		<div className="card__profile__info">
			<h3>Name: {user?.name}</h3>
			<h3>Email: {user?.email}</h3>
			<h3>Nickname: {user?.nickname}</h3>
			<h3>Country: {user?.locale}</h3>
		</div>
		</div>
		<Footer />
		</ProfileComponentStyles>
	);
};
