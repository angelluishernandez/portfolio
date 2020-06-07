import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { PortfolioProvider } from "./contexts/PortfolioContext";

ReactDOM.render(
	<PortfolioProvider>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</PortfolioProvider>,

	document.getElementById("root")
);

serviceWorker.unregister();
