import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

export const LoginComponent = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Make a POST request to your backend for user authentication
			const response = await axios.get('http://localhost:8080/users', {
				name,
				password,
			});

			if (response.data.authenticated) {
				// User is authenticated, navigate to private route
				navigate.push('/private');
			} else {
				// User is not authenticated, show an error
				console.log('User not found');
			}
		} catch (error) {
			console.error('Error during authentication:', error);
		}
	};

	const handleUserChange = (e) => {
		setName(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="loginWhole">
			<h1>Login Page</h1>
			<div className="containerLogin">
				<div className="formLogin">
					<form onSubmit={handleSubmit}>
						<div className="formGridLogin">
							<div className="formItemLogin">
								<input type="text" id="user" placeholder="Username" value={name} onChange={handleUserChange} />
							</div>
							<div className="formItemLogin">
								<input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
							</div>
							<button type="submit">Iniciar sesión</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
