import styled from "styled-components";

export const TechChip = styled.div`
	border-radius: 10px;
	border: 1px dashed var(--linkBackground);
	padding: 5px;
	margin-right: 10px;
	color: white;
	&:hover {
		background-color: var(--linkBackground);
	}
`;
