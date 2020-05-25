import React from "react";
import { ButtonContainer } from "../styled-components/ButtonContainer";

const AboutComponent = () => (
	<section className="AboutComponent" id="about">
		<div className="row">
			<div className="container-fluid my-auto d-flex">
				<div className="about-text">
					<h1>
						Hi! I am Ángel Luis Hernández Herrero. I am looking for a job as a
						Web Developer
					</h1>
					<h5>In this portfolio you can checkout some of my projects</h5>
					<div className="mt-5 mb-5">________________________________</div>

					<ButtonContainer>
						<a href="#about">Check out my work</a>
					</ButtonContainer>
				</div>
			</div>
		</div>
	</section>
);

export default AboutComponent;
