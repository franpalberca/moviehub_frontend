// import {useState, useEffect} from 'react';
// import {getDataApi} from './getDataApi';
// import {useAuth0} from '@auth0/auth0-react';
// // import {Card} from '../components/card/Card';
// import {useUserContext} from '../context/userContext';

// interface MoviesType {
// 	id: string;
// 	title: string;
// 	score: number;
// 	year: number;
// 	country: string;
// 	imageId: string;
// 	genres: GenreType[];
// 	genresArray: string[];
// 	createdAt: string;
// 	updatedAt: string;
// 	usersId: string;
// }

// interface GenreType {
// 	id: string;
// 	genre: string;
// 	createdAt: string;
// 	updatedAt: string;
// 	moviesId: string[];
// }

export const fetchMovies = async (url, getToken) => {
	const token = await getToken();
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Network response was not ok.');
		}
	} catch (error) {
		console.log(error);
	}
};

export const updateMovie = async (url, getToken, data) => {
	const token = await getToken();

	try {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: data,
		});

		if (response.ok) {
			console.log('update');
		} else {
			throw new Error('Failed to update movie');
		}
	} catch (error) {
		throw new Error('Error updating movie:', error);
	}
};

export const deleteMovie = async (url, getToken, movieId) => {
	const token = await getToken();

	try {
		const response = await fetch(`${url}/${movieId}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			console.log('delete');
		} else {
			throw new Error('Failed to delete movie');
		}
	} catch (error) {
		throw new Error('Error deleting movie:', error);
	}
};

// export const GetMovies = () => {
// 	const [moviesData, setMoviesData] = useState<MoviesType[]>([]);
// 	const userData = useUserContext();
// 	const {getAccessTokenSilently} = useAuth0();
// 	const url = `${import.meta.env.VITE_API_MOVIES}/${userData?.id}`;

// 	useEffect(() => {
// 		console.log("URL:", url);
// 		const fetchMovies = async () => {
// 			const data = await getDataApi(url, getAccessTokenSilently);
// 			console.log("Movies Data:", data);
// 			setMoviesData(data.movies);
// 		};
// 		fetchMovies();
// 	}, []);

// 	useEffect(() => {
// 		console.log("Movies Data Updated:", moviesData);
// 	}, [moviesData]);

// 	return (
// 		<>
// 			{moviesData.map((movie) => (
// 				<Card key={movie.id} {...movie} />
// 			))}
// 		</>
// 	);
// };
