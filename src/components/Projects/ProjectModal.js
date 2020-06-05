import React from "react";
import { ModalContainer } from "../styled-components/ModalContainer";
import { CardContainer } from "../styled-components/CardContainer";
import { TechChip } from "../styled-components/TechChip";

const ProjectModal = (props) => {
	return (
		<ModalContainer>
			<CardContainer className="col-12 col-lg-8 mx-auto m-2">
				<div className="project-card  d-flex flex-row align-items-center">
					<div className="row p-0 m-0">
						<div className="col-md-5 w-100 h-100 align-items-center justify-content-center">
							<img
								src={require("../../images/project.png")}
								alt="..."
								className=" my-auto"
							/>
						</div>

						<div className="col-md-7">
							<div className="card-body text-left">
								<h5 className="card-title">{props.project.title}</h5>
								<p className="card-text ">{props.project.description}</p>
								<div className="row m-0 pt-0 techs-container">
									{props.project.techs.map((tech, index) => (
										<TechChip key={index}>{tech}</TechChip>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardContainer>
		</ModalContainer>
	);
};

export default ProjectModal;
