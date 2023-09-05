
export const createMovie = async (urlMovies: string, movieData: FormData, getToken: any) => {
	const token = await getToken();
	console.log(getToken)

	try {
		const response = await fetch(urlMovies, {
			method: 'POST',
			headers: {
				authorization: `Bearer ${token}`,
			},
			body: movieData,
		});

		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No response at server');
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
};
