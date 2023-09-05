import {useEffect, useState} from 'react';


const urlMovies = import.meta.env.VITE_API_MOVIES;

export const PrivateComponent = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetch(urlMovies);
				const data = await response.json();
				setMovies(data);
			} catch (error) {
				console.error('Error fetching movies:', error);
			}
		}

		fetchMovies();
	}, []);

	return (
		<div>
			<h1>My Movies</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie._id}>
						<img src={movie.picture} alt={movie.name} />
						{movie.name}
					</li>
				))}
			</ul>
		</div>
	);
};
