import axios from "axios";

const http = axios.create({
	baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
	withCredentials: true,
});

const isApiWorking = () => http.get("/");

const sendEmailToApi = ({ name, email, subject, message }) => {
	console.log("This is the email", name, email, subject, message);

	return http.post("/send-mail", { name, email, subject, message });
};

export default {
	isApiWorking,
	sendEmailToApi,
};
