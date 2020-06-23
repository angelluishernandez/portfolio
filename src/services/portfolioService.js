import axios from "axios";

const http = axios.create({
	baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
	withCredentials: true,
});

const isApiWorking = () => http.get("/");

const sendEmailToApi = (email) => http.post("/send-mail", email);

export default {
	isApiWorking,
	sendEmailToApi,
};
