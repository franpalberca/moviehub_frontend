import styled from 'styled-components';

export const NavbarStyles = styled.div`
	.navbar {
		width: 100%;
		height: 80px;
		background-color: darkblue;
		display: flex;
		align-items: center;

		&__links {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__links-left {
			display: flex;
			align-items: center;
			margin-left: 20px;
		}

		&__links-right {
			display: flex;
			align-items: center;
			margin-right: 20px;

			&__welcome {
			   text-decoration: none;
			   color: lightblue;
		   }
		}

		&__links a {
			text-decoration: none;
			color: lightblue;
			font-size: 25px;
		}

		&__divButtonSignUp {
			padding: 0px 10px;
			height: 42px;
			border-radius: 6px;
			background-color: rgb(247, 214, 51);
			font-family: FigtreeSB, sans-serif;
			cursor: pointer;
			min-width: 80px;
			overflow: hidden;
			display: flex;
			-webkit-box-align: center;
			align-items: center;
			text-align: center;
			justify-content: center;
			font-size: 20px;
			font-weight: 500;
			margin: 8px;
			flex: 1 1 0%;
			&hover {
				cursor: pointer;
			}
		}
	}
`;
