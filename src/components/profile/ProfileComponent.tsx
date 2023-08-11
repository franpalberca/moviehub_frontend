import {useAuth0} from '@auth0/auth0-react';

export const ProfileComponent = () => {
	const {user} = useAuth0();

	return (
		<div className="card__profile">
			<h1>Hello {user?.name}</h1>
			<img src={user?.picture} />
		</div>
	);
};
