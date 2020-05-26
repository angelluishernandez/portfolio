import React from "react";
import { TechLogo } from "../styled-components/TechLogo";

const DescriptionLogo = ({ img, name }) => {
	return (
		<TechLogo className="col-md-2 m-2 mt-3">
			<img src={img} alt="..." className="tech-logos" />
			<h6 className="text-muted mt-2">{name}</h6>
		</TechLogo>
	);
};

export default DescriptionLogo;
