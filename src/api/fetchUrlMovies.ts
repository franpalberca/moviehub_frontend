import {GetTokenSilentlyOptions} from '@auth0/auth0-react';
import {GetTokenSilentlyVerboseResponse} from '@auth0/auth0-spa-js';

const urlMovies = import.meta.env.VITE_API_MOVIES;


export const getAllMovies = async (getToken: {
	(options: GetTokenSilentlyOptions & {detailedResponse: true}): Promise<GetTokenSilentlyVerboseResponse>;
	(options?: GetTokenSilentlyOptions | undefined): Promise<string>;
	(options: GetTokenSilentlyOptions): Promise<string | GetTokenSilentlyVerboseResponse>;
}) => {
	try {
		const token = await getToken();
		const response = await fetch(urlMovies, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
		const movies = await response.json();

		return movies;
	} catch (error) {
		throw new Error('error fetching users');
	}
};
