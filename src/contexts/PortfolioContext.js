import React, { Component, createContext } from "react";
import { projects } from "../projects";

const PortfolioContext = createContext();

class PortfolioProvider extends Component {
	state = {
		isModalOpen: false,
		projects: projects,
		modalProject: {},
	};

	getProject = (id) => this.state.projects.find((item) => item.id === id);

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
				}}
			>
				{this.props.children}
			</PortfolioContext.Provider>
		);
	}
}

const PortfolioConsumer = PortfolioContext.Consumer;

export { PortfolioProvider, PortfolioConsumer };
