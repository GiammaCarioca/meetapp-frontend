import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Logo = styled.h1`
	img {
		margin: 0;
		width: 35px;
		height: 35px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	max-width: 320px;

	label {
		margin-top: 40px;
		font-weight: bold;
		color: #ffffff;
	}

	input {
		flex: 1;
		width: 320px;
		background: transparent;
		border-style: none;
		margin-top: 10px;
		font-size: 20px;
		color: #ffffff;
		opacity: 0.6;

		:focus {
			outline: 5px auto #e5556e;
		}
	}
`;

export const StyledLink = styled(Link)`
	color: #ffffff;
	opacity: 0.6;
	text-decoration: none;
	width: 320px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5px;

	&:focus {
		outline: 5px auto #e5556e;
	}

	&:hover {
		background-color: transparent;
		color: #e5556e;
	}
`;
