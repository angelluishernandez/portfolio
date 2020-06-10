import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortfolioConsumer } from "../../contexts/PortfolioContext";

const NavBarComponent = () => {
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const windowIsTop = window.scrollY < 100;
			setIsTop(windowIsTop);
		});
	}, []);

	return (
		<PortfolioConsumer>
			{(value) => {
				const showMenu = value.isCollapsed ? "show mobile-menu" : "";

				return (
					<nav
						className={`navbar navbar-expand-lg NavBarComponent	d-flex ${
							isTop ? "navbar-transparent" : "navbar-colored"
						}`}
					>
						<Link className="navbar-brand" to="/" id="nav-name">
							<span className="full-text">ÁNGEL LUIS HERNÁNDEZ HERRERO</span>
							<span className="short-text">ÁNGEL HERNÁNDEZ</span>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={value.toggleNavbar}
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className={`collapse navbar-collapse ${showMenu}`}
							id="navbarNav"
						>
							<ul className="navbar-nav">
								<li className="nav-item active">
									<Link className="link-item nav-link" to="/">
										ABOUT
									</Link>
								</li>
								<li className="nav-item">
									<Link className="link-item nav-link" to="/stack">
										STACK
									</Link>
								</li>
								<li className="nav-item">
									<Link className="link-item nav-link" to="/projects">
										PROJECTS
									</Link>
								</li>
								<li className="nav-item">
									<Link className="link-item nav-link" to="/contact">
										CONTACT
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				);
			}}
		</PortfolioConsumer>
	);
};

export default NavBarComponent;
