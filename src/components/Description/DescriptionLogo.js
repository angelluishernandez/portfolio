import React from "react";
import { TechLogo } from "../styled-components/TechLogo";
import { LogoTextWrapper } from "../styled-components/LogoTextWrapper";

const DescriptionLogo = ({ img, name }) => {
	return (
		<TechLogo className="col-md-2 m-2 mt-3">
			<img src={img} alt="..." className="tech-logos" />
			<LogoTextWrapper className="text-muted mt-2">{name}</LogoTextWrapper>
		</TechLogo>
	);
};

export default DescriptionLogo;
