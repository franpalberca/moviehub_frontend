import {useState, useEffect} from 'react';
import {getDataApi} from './getDataApi';
import {useAuth0} from '@auth0/auth0-react';
import {Card} from '../components/card/Card';
import {useUserContext} from '../context/userContext';

interface MoviesType {
	id: string;
	title: string;
	score: number;
	year: number;
	country: string;
	imageId: string;
	genres: GenreType[];
	genresArray: string[];
	createdAt: string;
	updatedAt: string;
	usersId: string;
}

interface GenreType {
	id: string;
	genre: string;
	createdAt: string;
	updatedAt: string;
	moviesId: string[];
}

export const GetMovies = () => {
	const [moviesData, setMoviesData] = useState<MoviesType[]>([]);
	const userData = useUserContext();
	const {getAccessTokenSilently} = useAuth0();
	const url = `${import.meta.env.VITE_API_MOVIES}/${userData?.id}`;

	useEffect(() => {
		console.log("URL:", url);
		const fetchMovies = async () => {
			const data = await getDataApi(url, getAccessTokenSilently);
			console.log("Movies Data:", data);
			setMoviesData(data.movies);
		};
		fetchMovies();
	}, []);

	useEffect(() => {
		console.log("Movies Data Updated:", moviesData); 
	}, [moviesData]);

	return (
		<>
			{moviesData.map((movie) => (
				<Card key={movie.id} {...movie} />
			))}
		</>
	);
};
