import React, { Component, createContext } from "react";

const PortfolioContext = createContext();

class PortfolioProvider extends Component {
	state = {
		isModalOpen: false,
	};

	toggleModal = (id) => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	};

	render() {
		return (
			<PortfolioContext.Provider
				value={{
					...this.state,
					isModalOpen: this.state.isModalOpen,
					toggleModal: this.toggleModal,
				}}
			>
				{this.props.children}
			</PortfolioContext.Provider>
		);
	}
}

const PortfolioConsumer = PortfolioContext.Consumer;

export { PortfolioProvider, PortfolioConsumer };
