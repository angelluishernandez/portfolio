import React, { useState } from "react";
import { CardContainer } from "../styled-components/CardContainer";
import { ButtonContainer } from "../styled-components/ButtonContainer";

const ProjectCard = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	return (
		<CardContainer
			className="col-4 col-lg-4 mx-auto mb-2"
			onClick={toggleModal}
		>
			<div className="project-card d-flex  flex-column ">
				<div className=" w-100 h-100">
					<img
						src={require("../../images/project.png")}
						alt="..."
						className="my-auto"
					/>
				</div>

				<div className="card-body text-left ">
					<h5 className="card-title text-center">{props.project.title}</h5>
				</div>
				<div className="d-flex justify-content-center">
					<ButtonContainer>Check code</ButtonContainer>
					<ButtonContainer>Check online</ButtonContainer>
				</div>
			</div>
		</CardContainer>
	);
};

export default ProjectCard;
