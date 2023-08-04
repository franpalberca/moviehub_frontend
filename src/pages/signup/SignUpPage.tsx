import {useState} from 'react';

const urlUsers = import.meta.env.VITE_API_USERS;

export const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		password: '',
		// confirmPassword: '',
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
            console.log("pasa por aquí")
			// Enviar solicitud POST al servidor
			const response = await fetch(urlUsers, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Registro exitoso!');
			} else {
				console.error('Error al registrar usuario');
			}
		} catch (error) {
			console.error('Error de red:', error);
		}
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Username</label>
					<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
				</div>
				{/* <div>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
				</div> */}
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
