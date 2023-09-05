const url = import.meta.env.VITE_API;

export type GetTokenFunction = () => Promise<string>;

export const getDataApi = async (endpoint: string, getToken: GetTokenFunction) => {
	const token = await getToken();
  console.log(endpoint)

	try {
		const response = await fetch(`${url}${endpoint}`, {method: 'GET', headers: {authorization: `Bearer ${token}`}});
		const data = await response.json();

		return data;
	} catch (error) {
		throw new Error('error fetching data');
	}
};

export const getDataApiPublic = async (endpoint: string) => {
	try {
		const response = await fetch(`${url}${endpoint}`);
		const data = await response.json();

		return data;
	} catch (error) {
		throw new Error('error fetching data');
	}
};
