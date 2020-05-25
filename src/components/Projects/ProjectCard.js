import React from "react";
import { CardContainer } from "../styled-components/CardContainer";

const ProjectCard = (props) => {
	console.log(props);
	return (
		<CardContainer className="col-10 mx-auto col-md-6 col-lg-4">
			<div className="card mt-2">
				<img
					src={require("../../images/project.png")}
					alt="..."
					className="card-img-top mt-2"
				/>

				<div className="card-body">
					<h5 className="card-title">{props.project.title}</h5>
					<p className="card-text mt-2">{props.project.description}</p>
				</div>
			</div>
		</CardContainer>
	);
};

export default ProjectCard;
