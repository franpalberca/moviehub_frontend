import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const HomePage = () => {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate('/login');
		}, 3000);
	}, [navigate]);
	return (
		<div
			style={{
				backgroundImage: `url("https://i.postimg.cc/mrCcBc08/1366-2000.jpg")`,
				height: '100vh',
				width: '100%',
			}}></div>
	);
};
