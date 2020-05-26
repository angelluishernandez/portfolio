import React from "react";
import { Horizontal } from "../styled-components/Horizontal";
import { techLogos } from "../../techLogos";
import DescriptionLogo from "./DescriptionLogo";

const Description = () => {
	return (
		<section className="Description">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 mt-5">
						<h3>Here's my stack</h3>
						<p>
							I am a web developer who is always looking for opportunities,
							challenges to overcome and new technologies to learn.{" "}
						</p>
						<p>
							So far these are the technologies I am having the most fun with
						</p>
					</div>
					<div className="row justify-content-center">
						{techLogos.map((logo, index) => (
							<DescriptionLogo img={logo.img} name={logo.name} key={index} />
						))}
					</div>
					<Horizontal />
				</div>
			</div>
		</section>
	);
};

export default Description;
