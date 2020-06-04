import styled from "styled-components";

export const ButtonContainer = styled.button`
	background-color: transparent;
	border: 2px solid white;
	width: 30%;
	color: white;
	overflow: auto;

	&:hover {
		background-color: white;
		color: black;
	}

	a {
		text-decoration: none;
		font-size: 1.3em;
		font-weight: 200;
		font-family: "Poppins", sans-serif;
		color: inherit;
	}
`;
