import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const LowerNavbar = () => {
	return (
		<nav className="navbar navbar-expand-lg LowerNavbar">
			<div className="navbar-item">
				<a href="https://github.com/angelluishernandez" target="blank">
					<FontAwesomeIcon icon={faGithub} />
					Github
				</a>
			</div>
			<div className="navbar-item">
				<a href="https://www.linkedin.com/in/anherher/" target="blank">
					<FontAwesomeIcon icon={faLinkedin} />
					LinkedIn
				</a>
			</div>
		</nav>
	);
};

export default LowerNavbar;
