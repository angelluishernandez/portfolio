import React, { Component, createContext } from "react";
import { projects } from "../projects";

const PortfolioContext = createContext();

class PortfolioProvider extends Component {
	state = {
		isModalOpen: false,
		projects: projects,
		modalProject: {},
		isCollapsed: false,
	};

	getProject = (id) => this.state.projects.find((item) => item.id === id);

	// Navbar methods

	toggleNavbar = () => {
		this.setState({
			isCollapsed: !this.state.isCollapsed,
		});
	};

	closeNavbar = () => {
		this.setState({
			isCollapsed: false,
		});
	};

	// Project modal methods

	openModal = (id) => {
		const project = this.getProject(id);
		this.setState({
			isModalOpen: true,
			modalProject: project,
		});
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	render() {
		return (
			<PortfolioContext.Provider
				value={{
					...this.state,
					isModalOpen: this.state.isModalOpen,
					openModal: this.openModal,
					closeModal: this.closeModal,
					modalProject: this.state.modalProject,
					isCollapsed: this.state.isCollapsed,
					toggleNavbar: this.toggleNavbar,
					closeNavbar: this.closeNavbar,
				}}
			>
				{this.props.children}
			</PortfolioContext.Provider>
		);
	}
}

const PortfolioConsumer = PortfolioContext.Consumer;

export { PortfolioProvider, PortfolioConsumer };
