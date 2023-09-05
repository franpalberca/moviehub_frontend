import {useAuth0} from '@auth0/auth0-react';
import { useUserContext } from '../../context/userContext';

export const ProfileComponent = () => {
	const {isLoading, user} = useAuth0();
	const userData = useUserContext();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Hello {user?.given_name}</h1>
			<img src={user?.picture} alt={user?.name} />
			{userData && (
				<>
					<h3>ID from Your Database: {userData.id}</h3>
					<h3>Name: {userData.name}</h3>
					<h3>Email: {userData.email}</h3>
				</>
			)}
		</div>
	);
};
