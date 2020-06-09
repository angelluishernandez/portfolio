import React from "react";
import "./App.css";
import NavBarComponent from "./components/NavBar/NavbarComponent";
import AboutComponent from "./components/About/AboutComponent";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import Api from "./components/Api";
import Description from "./components/Description/Description";
import ProjectModal from "./components/Projects/ProjectModal";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<NavBarComponent />
			<Switch>
				<Route exact path={"/"} component={AboutComponent} />
				<Route exact path={"/api"} component={Api} />
				<Route exact path={"/stack"} component={Description} />
				<Route exact path={"/projects"} component={ProjectsContainer} />
				<Route exact path={"/contact"} component={Contact} />
			</Switch>
			<ProjectModal />
			<LowerNavbar />
		</div>
	);
}

export default App;
