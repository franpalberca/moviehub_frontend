import {useEffect, useState} from 'react';
import {useUserContext} from '../../context/userContext';
import {fetchMovies} from '../../api';
import {useAuth0} from '@auth0/auth0-react';

export const PrivateComponent = () => {
	const urlMovies = import.meta.env.VITE_API_MOVIES;
	const {getAccessTokenSilently} = useAuth0();
	const [movies, setMovies] = useState([]);
	const userData = useUserContext();
	let url = '';
	if (userData) {
		url = `${urlMovies}/${userData.id}`;
	}
	useEffect(() => {
		async function fetchDataMovies() {
			const moviesData = await fetchMovies(url, getAccessTokenSilently);
			console.log(moviesData);
			setMovies(moviesData.movies);
			// } catch (error) {
			// 	console.error('Error fetching movies:', error);
			// }
		}

		fetchDataMovies();
	}, []);

	useEffect(() => {
		console.log(movies);
	}, [movies]);

	return (
		<div>
			<h1>My Movies</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<img src={movie.imageUrl} alt={movie.title} />
						{movie.title}
					</li>
				))}
			</ul>
		</div>
	);
};
