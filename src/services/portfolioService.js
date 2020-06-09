import axios from "axios";

const http = axios.create({
	baseURL: "https://angelluishernandez-api.herokuapp.com/",
	withCredentials: true,
});

const isApiWorking = () => http.get("/");

const sendEmailToApi = (email) => http.post("/send-mail", email);

export default {
	isApiWorking,
	sendEmailToApi,
};
