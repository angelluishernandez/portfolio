import React from "react";
import { projects } from "../../projects.json";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
	return (
		<div className="container-fluid" id="projects">
			<div className="row">
				{projects.map((project, index) => (
					<ProjectCard project={project} key={index} />
				))}
			</div>
		</div>
	);
};

export default ProjectsContainer;
