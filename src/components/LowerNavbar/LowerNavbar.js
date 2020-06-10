import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const LowerNavbar = () => {
	return (
		<nav className="navbar navbar-expand-lg LowerNavbar">
			<div className="navbar-item">
				<a href="https://github.com/angelluishernandez" target="blank">
					<FontAwesomeIcon icon={faGithub} />
					<span className="ml-2 mr-2">Github</span>
				</a>
			</div>

			<div className="navbar-item">
				<a
					href="https://drive.google.com/file/d/14t1XQdgXeDQrBucu__pLOi-8W58vE039/view"
					target="blank"
				>
					<FontAwesomeIcon icon={faFileDownload} />
					<span className="ml-2 mr-2">My CV</span>
				</a>
			</div>

			<div className="navbar-item">
				<a href="https://www.linkedin.com/in/anherher/" target="blank">
					<FontAwesomeIcon icon={faLinkedin} />
					<span className="ml-2 mr-2">LinkedIn</span>
				</a>
			</div>
		</nav>
	);
};

export default LowerNavbar;
