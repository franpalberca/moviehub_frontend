import {useEffect, useState} from 'react';
import {useUserContext} from '../../context/userContext';
import {fetchMovies} from '../../api';
import {useAuth0} from '@auth0/auth0-react';
import {Card} from '../card/Card';
import { PrivateComponentStyles } from '..';

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
		<PrivateComponentStyles>
		<>
			<h1 className='title'>My Movies</h1>
			<div className="movie-grid">
				{movies.map((movie) => (
					<Card key={movie.id} imageUrl={movie.imageUrl} title={movie.title} country={movie.country} year={movie.year} score={movie.score} genresArray={movie.genresArray} />
				))}
			</div>
		</>
		</PrivateComponentStyles>
	);
};
