import React from "react";
import ProjectCard from "./ProjectCard";
import { PortfolioConsumer } from "../../contexts/PortfolioContext";

const ProjectsContainer = () => {
	return (
		<div className="container-fluid" id="projects">
			<div className="row">
				<PortfolioConsumer>
					{(value) => {
						return value.projects.map((project, index) => (
							<ProjectCard
								project={project}
								key={index}
								openModal={value.openModal}
								isModalOpen={value.isModalOpen}
							/>
						));
					}}
				</PortfolioConsumer>
			</div>
		</div>
	);
};

export default ProjectsContainer;
