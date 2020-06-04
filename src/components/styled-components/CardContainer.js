import styled from "styled-components";

export const CardContainer = styled.div`
	.card {
		border-color: transparent;
		transition: all 0.2s linear;
		height: 30vh;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 0.2s linear;
	}

	.card-text {
		overflow: hidden;
		overflow-y: auto;
		max-height: 50%;
	}

	.card-text::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		background-color: #f5f5f5;
	}

	.card-text::-webkit-scrollbar {
		width: 12px;
		background-color: #f5f5f5;
	}

	.card-text::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: coral;
	}

	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}

	img {
		height: 30%;
		width: 30%;
		object-fit: contain;
		margin: 0 auto;
	}
	.card-body {
		margin: 0 auto;
	}
`;
