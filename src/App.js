import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarComponent from "./components/NavBar/NavbarComponent";
import AboutComponent from "./components/About/AboutComponent";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import Divider from "./components/Divider";
import Api from "./components/Api";
import Description from "./components/Description/Description";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<NavBarComponent />
			<Switch>
				<Route exact path={"/"} component={AboutComponent} />
				<Route exact path={"/stack"} component={Description} />
				<Route exact path={"/projects"} component={ProjectsContainer} />
				<Route exact path={"/contact"} component={Contact} />
				<Route exact path={"/api"} component={Api} />
			</Switch>
			<LowerNavbar />
		</div>
	);
}

export default App;
