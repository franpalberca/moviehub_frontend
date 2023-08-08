import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {PRIVATE} from '../../config';
import { LoginComponentStyles } from '..';

const urlUsers = import.meta.env.VITE_API_USERS;

export const LoginComponent = () => {
	const [formData, setFormData] = useState({
		password: '',
        email: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(urlUsers)
			const users = await response.json();
			console.log('Server response:', users);
            console.log('Email:', formData.email);
            console.log('Password:', formData.password);

			const foundUser = users.find((user) => user.email === formData.email && user.password === formData.password);

			if (foundUser) {
				return <Navigate to={PRIVATE} />;
			} else {
				console.log('User not found');
			}
		} catch (error) {
			console.error('Error during authentication:', error);
		}
	};

	const handleEmailChange = (e) => {
		const value = e.target.value;
		setFormData((prevData) => ({...prevData, email: value}));
	};

	const handlePasswordChange = (e) => {
		const value = e.target.value;
		setFormData((prevData) => ({...prevData, password: value}));
	};

	return (
        <LoginComponentStyles>
		<div className="login__whole">
			<h1>Login Page</h1>
			<div className="containerLogin">
					<form onSubmit={handleSubmit}>
				<div className="formLogin">
						<div className="formGridLogin">
							<div className="formItemLogin">
								<input type="text" id="email" placeholder="Email" value={formData.email} onChange={handleEmailChange} />
							</div>
							<div className="formItemLogin">
								<input type="password" id="password" placeholder="Password" value={formData.password} onChange={handlePasswordChange} />
							</div>
							<button className='formGridLogin' type="submit">Iniciar sesión</button>
						</div>
				</div>
					</form>
			</div>
		</div>
        </LoginComponentStyles>
	);
};
