import React, { useState } from "react";
import { CardContainer } from "../styled-components/CardContainer";
import { ButtonContainer } from "../styled-components/ButtonContainer";

const ProjectCard = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	return (
		<CardContainer className="col-12 col-lg-8 mx-auto m-2">
			<div className="project-card  d-flex flex-row align-items-center ">
				<div className="row  justify-content-center ">
					<div className="col-md-5 w-100 h-100  justify-content-center">
						<img
							src={require("../../images/project.png")}
							alt="..."
							className="my-auto"
						/>
					</div>

					<div className="col-md-7">
						<div className="card-body text-left ">
							<h5 className="card-title text-center">{props.project.title}</h5>

							{/* <p className="card-text ">{props.project.description}</p>
							<div className="row m-0 pt-0 techs-container">
								{props.project.techs.map((tech, index) => (
									<TechChip key={index}>{tech}</TechChip>
								))}
							</div> */}
						</div>
					</div>
					<ButtonContainer onClick={toggleModal} className="mx-auto">
						Check details
					</ButtonContainer>
				</div>
			</div>
		</CardContainer>
	);
};

export default ProjectCard;
