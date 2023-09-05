import {useEffect, useState} from 'react';
import {useUserContext} from '../../context/userContext';
import {deleteMovie, fetchMovies, updateMovie} from '../../api';
import {useAuth0} from '@auth0/auth0-react';
import {Card} from '../card/Card';
import {PrivateComponentStyles} from '..';

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
			setMovies(moviesData.movies);
		}

		fetchDataMovies();
	}, []);

	const handleUpdateMovie = async (movieId) => {
		const movieUrl = `${urlMovies}`;
		try {
			await updateMovie(movieUrl, getAccessTokenSilently, movieId);
			setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
		} catch (error) {
			console.error('Error updating movie:', error);
		}
	};

	const handleDeleteMovie = async (movieId) => {
		const movieUrl = `${urlMovies}`;
		try {
			await deleteMovie(movieUrl, getAccessTokenSilently, movieId);
			setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
		} catch (error) {
			console.error('Error deleting movie:', error);
		}
	};

	useEffect(() => {
		console.log('Movies updated', movies);
	}, [movies]);
	return (
		<PrivateComponentStyles>
			<>
				<h1 className="title">My Movies</h1>
				<div className="movie-grid">
					{movies.map((movie) => (
						<Card
							key={movie.id}
							id={movie.id}
							imageUrl={movie.imageUrl}
							title={movie.title}
							country={movie.country}
							year={movie.year}
							score={movie.score}
							genresArray={movie.genresArray}
							onDelete={() => handleDeleteMovie(movie.id)}
							onModify={() => handleUpdateMovie(movie.id)}
						/>
					))}
				</div>
			</>
		</PrivateComponentStyles>
	);
};
