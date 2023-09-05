import {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {UserProps} from '../api';

const UserContext = createContext<null | UserProps>(null);


export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}: {children: ReactNode}) => {
	const [userData, setUserData] = useState<null | UserProps>(null);
    const {user} = useAuth0();
	useEffect(() => {
		if (user) {
			const fetchData = async () => {
				try {
					const response = await fetch(`http://localhost:8080/public/users/${user.email}`);
					const data = await response.json();
					setUserData(data);
				} catch (error) {
					console.error('Error fetching user data:', error);
				}
			};

			fetchData();
		}
	}, [user]);

	return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
