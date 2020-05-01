import React from "react";

const AboutComponent = () => (
	<section className="AboutComponent">
		<div className="row">
			<div className="col-md-6 bg-success">
				<img
					src={process.env.PUBLIC_URL + "/profile-pic.png"}
					alt="profile"
					className="profile-pic"
				/>
			</div>
			<div className="col-md-1 bg-danger">
				<div className="divider-line"></div>
			</div>
			<div className="col-md-5 bg-primary about-text">
				<h2>About me: </h2>
				<p>
					Lorem fistrum ese que llega tiene musho peligro jarl ese que llega no
					puedor a wan la caidita ese hombree no te digo trigo por no llamarte
					Rodrigor a wan. Qué dise usteer ese que llega ahorarr caballo blanco
					caballo negroorl pupita llevame al sircoo amatomaa ese pedazo de
					llevame al sircoo la caidita la caidita.{" "}
				</p>
				<p>
					{" "}
					Sexuarl papaar papaar tiene musho peligro papaar papaar ese pedazo de
					por la gloria de mi madre caballo blanco caballo negroorl no puedor
					está la cosa muy malar me cago en tus muelas. Torpedo hasta luego
					Lucas te va a hasé pupitaa la caidita papaar papaar. Llevame al sircoo
					por la gloria de mi madre a gramenawer caballo blanco caballo
					negroorl.
				</p>
				<div className="row">
					<div className="col-md-12 logo-container">
						<img
							src={process.env.PUBLIC_URL + "/html5.png"}
							alt="html"
							className="tech-logo"
						/>
						<img
							src={process.env.PUBLIC_URL + "/css.png"}
							alt="css"
							className="tech-logo"
						/>
						<img
							src={process.env.PUBLIC_URL + "/js.png"}
							alt=""
							className="tech-logo"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default AboutComponent;
