import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const isApiWorking = () => http.get("/");

const sendEmailToApi = ({ name, email, subject, message }) => {
	return http.post("/send-mail", { name, email, subject, message });
};

export default {
	isApiWorking,
	sendEmailToApi,
};
