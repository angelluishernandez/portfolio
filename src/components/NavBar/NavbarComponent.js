import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBarComponent = () => {
	const [isTop, setIsTop] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const windowIsTop = window.scrollY < 100;
			setIsTop(windowIsTop);
		});
	}, []);

	return (
		<nav
			className={`navbar navbar-expand-lg NavBarComponent ${
				isTop ? "navbar-transparent" : "navbar-colored"
			}`}
		>
			<Link className="navbar-brand" href="#" id="nav-name">
				ÁNGEL LUIS HERNÁNDEZ HERRERO
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="link-item nav-link" href="#">
							ABOUT ME
						</Link>
					</li>
					<li className="nav-item">
						<Link className="link-item nav-link" href="#">
							STACK
						</Link>
					</li>
					<li className="nav-item">
						<Link className="link-item nav-link" href="#">
							PROJECTS
						</Link>
					</li>
					<li className="nav-item">
						<Link className="link-item nav-link" href="#">
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBarComponent;
