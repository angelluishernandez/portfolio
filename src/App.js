import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarComponent from "./components/NavBar/NavbarComponent";
import AboutComponent from "./components/About/AboutComponent";

function App() {
	return (
		<div className="App">
			<NavBarComponent />
			<AboutComponent />
		</div>
	);
}

export default App;
