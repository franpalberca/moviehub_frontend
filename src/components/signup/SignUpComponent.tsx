import {useState} from 'react';
import { SignUpComponentStyles } from './SignUpComponent.styles';
import { Navigate } from 'react-router-dom';
import { PRIVATE } from '../../config';


const urlUsers = import.meta.env.VITE_API_USERS;

export const SignUpComponent = () => {
	const [formData, setFormData] = useState({
		name: '',
		password: '',
		email: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch(urlUsers, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Succesfully registered!');
                <Navigate to={PRIVATE} />
			} else {
				console.error('Error trying to register user');
			}
		} catch (error) {
			console.error('Network error:', error);
		}
	};

	return (
		<SignUpComponentStyles>
			<div className="signup__whole">
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" id="name" name="name" placeholder="Username" value={formData.name} onChange={handleChange} required />

					<input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

					<input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

					<button type="submit">Sign Up</button>
				</form>
			</div>
		</SignUpComponentStyles>
	);
};