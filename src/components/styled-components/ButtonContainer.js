import styled from "styled-components";

export const ButtonContainer = styled.button`
	background-color: transparent;
	border: 2px solid black;
	width: 30%;

	&:hover {
		background-color: black;
		color: white;
	}

	a {
		text-decoration: none;
		font-size: 1.3em;
		font-weight: 200;
		font-family: "Poppins", sans-serif;
		color: inherit;
	}
`;
