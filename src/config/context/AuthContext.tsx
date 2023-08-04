import {createContext, useState, useCallback, useMemo, useContext, ReactNode} from 'react';
const MY_AUTH_APP = 'MY_AUTH_APP';

type AuthContextProps = {
	login: () => void;
	logout: () => void;
	isAuthenticated: boolean;
};

interface AuthContextProviderProps {
	children: ReactNode;
}


export const AuthContext = createContext<AuthContextProps>({
	login: () => {},
	logout: () => {},
	isAuthenticated: false,
});

export function AuthContextProvider({children}: AuthContextProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(window.localStorage.getItem('MY_AUTH_APP') === 'true');

	const login = useCallback(function () {
		window.localStorage.setItem(MY_AUTH_APP, 'true');
		setIsAuthenticated(true);
	}, []);

	const logout = useCallback(function () {
		window.localStorage.removeItem(MY_AUTH_APP);
		setIsAuthenticated(false);
	}, []);

	const value = useMemo(
		() => ({
			login,
			logout,
			isAuthenticated,
		}),
		[login, logout, isAuthenticated]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}