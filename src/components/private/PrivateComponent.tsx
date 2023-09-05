import {useEffect, useState} from 'react';
import {useUserContext} from '../../context/userContext';
import {GetMovies} from '../../api';

export const PrivateComponent = () => {
	const [movies, setMovies] = useState([]);
	const userData = useUserContext();

	useEffect(() => {
		async function fetchMovies() {
			try {
				const moviesData = await GetMovies();
				setMovies(moviesData);
			} catch (error) {
				console.error('Error fetching movies:', error);
			}
		}

		fetchMovies();
	}, [userData]);

	return (
		<div>
			<h1>My Movies</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<img src={movie.picture} alt={movie.name} />
						{movie.name}
					</li>
				))}
			</ul>
		</div>
	);
};
