import React from "react";
import portfolioService from "../services/portfolioService";
import { useEffect, useState } from "react";

const Api = () => {
	const [apiWorkMsg, setIsApiWorking] = useState("");

	portfolioService.isApiWorking().then((response) => {
		setIsApiWorking(response);
	});

	console.log(apiWorkMsg);
	return <div>{apiWorkMsg}</div>;
};

export default Api;
