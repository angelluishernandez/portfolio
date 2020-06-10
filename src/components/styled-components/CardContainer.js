import styled from "styled-components";

export const CardContainer = styled.div`
	.project-card {
		background-color: #22252b;
		border: 2px !important;
		transition: all 0.2s linear;
		border-radius: 5px;
		padding: 5%;
	}

	.project-img {
		max-width: 100%;
	}

	.project-card img,
	h5:hover {
		cursor: pointer;
	}

	.card-text {
		height: 100px;
		overflow-y: scroll;
	}

	.card-text::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px #f3ca20;
		border-radius: 10px;
		background-color: #b2becd;
	}

	.card-text::-webkit-scrollbar {
		width: 12px;
		background-color: #b2becd;
		border-radius: 5px;
		width: 5px;
	}

	.card-text::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px #f3ca20;
		background-color: #f3ca20;
	}

	.warning-sign {
		top: 0;
		right: 0;
		left: 0;
		width: 50%;
		margin-top: 25%;
		margin: auto auto;
		visibility: hidden;
		position: absolute;
		opacity: 0;
		transition: opacity 0.2s, visibility 0.2s;

		&h5 {
			font-weight: 800;
			border-bottom: 2px;
		}
	}

	.project-card:hover {
		.warning-sign {
			visibility: visible;
			opacity: 1;
			z-index: 500;
			justify-content: center;
		}
		.not-finished {
			/* filter: grayscale(100%); */
			filter: brightness(50%);
		}
	}

	@media (max-width: 500px) {
		.project-card {
			height: auto;
		}

		.card-text {
			height: auto;
		}
	}
`;
