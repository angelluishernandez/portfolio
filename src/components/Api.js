import React from "react";
import portfolioService from "../services/portfolioService";
import { useState } from "react";

const Api = () => {
	const [apiWorkMsg, setIsApiWorking] = useState("");

	portfolioService.isApiWorking().then((response) => {
		setIsApiWorking(response.data);
	});

	console.log(apiWorkMsg);
	return (
		<div>
			<h1>{apiWorkMsg}</h1>
		</div>
	);
};

export default Api;
