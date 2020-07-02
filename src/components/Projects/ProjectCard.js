import React from "react";
import { CardContainer } from "../styled-components/CardContainer";
import { ButtonContainer } from "../styled-components/ButtonContainer";
import warning from "../../images/warning.svg";

const ProjectCard = ({ openModal, isModalOpen, project }) => {
	return (
		<CardContainer className="col-12 col-lg-4 mx-auto mb-2">
			<div className="project-card d-flex flex-column">
				<div className=" w-100 h-100">
					<div className="warning-sign">
						{!project.isFinished ? (
							<div className="mt-2 pt-5">
								<h5>This project is not finished yet!</h5>
								<img src={warning} alt="..." className="ml-1" />{" "}
							</div>
						) : null}
					</div>
					<img
						src={project.img}
						alt="..."
						className={`my-auto project-img ${
							!project.isFinished ? "not-finished" : null
						}`}
						onClick={(id) => openModal(project.id)}
					/>
				</div>

				<div className="card-body text-center mx-auto">
					<h5 className="card-title text-center">{project.title}</h5>
				</div>
				<ButtonContainer
					onClick={() => openModal(project.id)}
					className="mx-auto mb-3"
				>
					Check details
				</ButtonContainer>
				<div className="d-flex justify-content-center">
					<ButtonContainer>
						<a href={project.github} target="blank">
							Check code
						</a>
					</ButtonContainer>
					<span> </span>

					<ButtonContainer>
						<a href={project.link} target="blank">
							Check online
						</a>
					</ButtonContainer>
				</div>
			</div>
		</CardContainer>
	);
};

export default ProjectCard;
