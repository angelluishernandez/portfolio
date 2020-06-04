import styled from "styled-components";

export const ButtonContainer = styled.button`
	background-color: transparent;
	border: 2px solid var(--linkBackground);
	width: 30%;
	color: var(--linkBackground);
	overflow: auto;

	&:hover {
		background-color: var(--linkBackground);
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
