import styled from 'styled-components';

export const LoginComponentStyles = styled.div`
	.login__whole {
		display: flex;
		justify-content: center;
		align-items: center;
        flex-direction: column;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
		padding: 20px;
		max-width: 500px;
		margin: 50px auto 20px auto;
	& h1 {
		text-align: center;
	}
}

	.formLogin {
		max-width: 650px;
	}

	.formGridLogin {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
	}

	.formItemLogin {
		margin-bottom: 10px;
	}

	.formGridLogin button {
        grid-column: 1/3;
		background-color: transparent;
		border: 2px solid black;
		min-width: 100px;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		border-radius: 15px;
	}

	.formGridLogin button:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
`;
