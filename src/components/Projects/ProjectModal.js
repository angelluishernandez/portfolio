import React from "react";
import { ModalContainer } from "../styled-components/ModalContainer";
import { CardContainer } from "../styled-components/CardContainer";
import { TechChip } from "../styled-components/TechChip";
import { PortfolioConsumer } from "../../contexts/PortfolioContext";
import { ButtonContainer } from "../styled-components/ButtonContainer";
import { Link } from "react-router-dom";

const ProjectModal = ({ isModalOpen, openModal }) => {
	return (
		<PortfolioConsumer>
			{(value) => {
				const { openModal, isModalOpen, closeModal } = value;
				const {
					title,
					description,
					techs,
					github,
					link,
					img,
				} = value.modalProject;

				if (!isModalOpen) {
					return null;
				} else {
					return (
						<ModalContainer onClick={closeModal}>
							<CardContainer className="col-12 col-lg-8 mx-auto m-2">
								<div className="project-card mx-auto justify-content-center">
									<div className="w-100 h-100 justify-content-center">
										<img src={img} alt="..." className=" my-auto project-img" />
									</div>

									<div className="">
										<div className="card-body text-left">
											<h5 className="card-title">{title}</h5>
											<p className="card-text ">{description}</p>
											<div className="row m-0 pt-0 techs-container">
												{techs.map((tech, index) => (
													<TechChip key={index}>{tech}</TechChip>
												))}
											</div>
										</div>
									</div>
									<ButtonContainer>
										<a href={github} target="blank">
											Check code
										</a>
									</ButtonContainer>
									<span> </span>
									<ButtonContainer>
										<a href={link} target="blank">
											Check online
										</a>
									</ButtonContainer>
								</div>
							</CardContainer>
						</ModalContainer>
					);
				}
			}}
		</PortfolioConsumer>
	);
};

export default ProjectModal;
