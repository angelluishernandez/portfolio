import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarComponent from "./components/NavBar/NavbarComponent";
import AboutComponent from "./components/About/AboutComponent";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import Divider from "./components/Divider";

function App() {
	return (
		<div className="App">
			<NavBarComponent />
			<AboutComponent />
			<Divider />
			<ProjectsContainer />
			<LowerNavbar />
		</div>
	);
}

export default App;
