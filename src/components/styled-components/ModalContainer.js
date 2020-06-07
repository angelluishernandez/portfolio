import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;

	#modal {
		background: #22252b;
		margin: 0 auto;
	}
`;
