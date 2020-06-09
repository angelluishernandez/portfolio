import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const isApiWorking = () => http.get("/");

const sendEmailToApi = (email) => http.post("/send-mail", email);

export default {
	isApiWorking,
	sendEmailToApi,
};
