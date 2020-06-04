import React from "react";
import { Horizontal } from "../styled-components/Horizontal";
import { techLogos } from "../../techLogos";
import { techLogos2 } from "../../techLogos2";
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
							<b>
								So far these are the technologies I am having the most fun with
							</b>
						</p>
					</div>
					<div className="row justify-content-center">
						{techLogos.map((logo, index) => (
							<DescriptionLogo img={logo.img} name={logo.name} key={index} />
						))}
					</div>
					<Horizontal />

					<div className="row justify-content-center">
						<div className="col-12 ">
							<p>
								<b>Here are some others I am planning to learn more about</b>
							</p>
						</div>

						<div className="row justify-content-center">
							{techLogos2.map((logo, index) => (
								<DescriptionLogo img={logo.img} name={logo.name} key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Description;
