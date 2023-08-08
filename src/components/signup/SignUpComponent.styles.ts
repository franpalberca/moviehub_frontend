import styled from 'styled-components';

export const SignUpComponentStyles = styled.div`
	.signup__whole {
		display: flex;
		justify-content: center;
		align-items: center;
        flex-direction: column;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
		padding: 20px;
		max-width: 500px;
		margin: 50px auto 20px auto;
        max-height: 400px;
	& h1 {
        font-size: 50px;
        justify-content: center;
        align-items: center;
    }
    & form {
        display:flex;
        flex-direction: column;
        margin: 10px 0 10px 0
    }
    & input {
        margin: 5px;
    }

    & button {
        background-color: transparent;
		border: 2px solid black;
		min-width: 100px;
        margin-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		border-radius: 15px;
	}

	& button:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
    }

	
`;