import {useAuth0} from '@auth0/auth0-react';
import {useState, useEffect} from 'react';

export const ProfileComponent = () => {
	const {user} = useAuth0();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		if (user) {
			const fetchData = async () => {
				try {
					const response = await fetch(`http://localhost:8080/public/users/${user.sub}`);
					const data = await response.json();
					setUserData(data);
				} catch (error) {
					console.error('Error fetching user data:', error);
				}
			};

			fetchData();
		}
	}, [user]);

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Hello {user.given_name}</h1>
			<img src={user.picture} alt={user.name} />
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
