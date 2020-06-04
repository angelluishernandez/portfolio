import React from "react";
import { useState } from "react";
import { ButtonContainer } from "../styled-components/ButtonContainer";
import portfolioService from "../../services/portfolioService";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// Use boolean to show success message

	const [emailSent, setEmailSent] = useState(false);

	const resetForm = () => {
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	};

	const handleSubmit = (e) => {
		console.log("entra");
		e.preventDefault();
		const emailToSend = {
			name,
			email,
			subject,
			message,
		};

		portfolioService
			.sendEmailToApi(emailToSend)
			.then((response) => {
				if (response) resetForm();
				setEmailSent(true);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="container Contact">
			<div className="row d-flex">
				<div className="col-12 justify-content-center ">
					<h3>Do you want to get in touch?</h3>
					<h5>Please leave message</h5>
					<h5>I will get back to you as soon as possible</h5>
					<form className="form-group" onSubmit={(e) => handleSubmit(e)}>
						<label htmlFor="name">Your name </label>
						<input
							type="text"
							className="form-control"
							name="name"
							onChange={(e) => setName(e.target.value)}
						/>

						<label htmlFor="email">Your email </label>
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="subject">Your subject </label>
						<input
							type="text"
							className="form-control"
							name="subject"
							onChange={(e) => setSubject(e.target.value)}
						/>

						<label htmlFor="message">Your message </label>
						<textarea
							type="text"
							className="form-control"
							name="message"
							onChange={(e) => setMessage(e.target.value)}
						/>

						<ButtonContainer>Send</ButtonContainer>
					</form>
					{emailSent ? <h1>Email has been sent</h1> : null}
				</div>
			</div>
		</div>
	);
};

export default Contact;
