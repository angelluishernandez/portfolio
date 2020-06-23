import React from "react";
import { useState } from "react";
import { ButtonContainer } from "../styled-components/ButtonContainer";
import portfolioService from "../../services/portfolioService";

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
	const [emailForm, setEmailForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	// Error handling

	const [errors, setErrors] = useState(false);
	const [errorMsg, setErrorMsg] = useState({});

	// Use boolean to show success message

	const [emailSent, setEmailSent] = useState(false);

	const resetForm = () => {
		setEmailForm({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	const handleValidation = ({ name, email, subject, message }) => {
		console.log(name, email, subject, message);
		if (name === "") {
			setErrors(true);
			setErrorMsg({ name: "You must provide a name, please" });
		} else if (
			email === undefined ||
			EMAIL_PATTERN.test(String(email).toLocaleLowerCase())
		) {
			setErrors(true);
			setErrorMsg({ email: "You must provide a valid email, please" });
		} else if (subject === undefined) {
			setErrors(true);
			setErrorMsg({ subject: "You must provide a subject, please" });
		} else if (message === undefined) {
			setErrors(true);
			setErrorMsg({ message: "You must provide a subject, please" });
		} else {
			setErrors(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const emailToSend = {
			name: emailForm.name,
			email: emailForm.email,
			subject: emailForm.subject,
			message: emailForm.message,
		};

		handleValidation(emailToSend);

		if (!errors) {
			portfolioService
				.sendEmailToApi(emailToSend)
				.then((response) => {
					if (response) resetForm();
					setEmailSent(true);
				})
				.catch((error) => console.log(error));
		}
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
							onChange={(e) => setEmailForm({ name: e.target.value })}
						/>
						{errors && <h5 className="form-error">{errorMsg.name}</h5>}

						<label htmlFor="email">Your email </label>
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={(e) => setEmailForm({ email: e.target.value })}
						/>
						{errors && <h5 className="form-error">{errorMsg.email}</h5>}

						<label htmlFor="subject">Your subject </label>
						<input
							type="text"
							className="form-control"
							name="subject"
							onChange={(e) => setEmailForm({ subject: e.target.value })}
						/>
						{errors && <h5 className="form-error">{errorMsg.subject}</h5>}

						<label htmlFor="message">Your message </label>
						<textarea
							type="text"
							className="form-control"
							name="message"
							onChange={(e) => setEmailForm({ message: e.target.value })}
						/>
						{errors && <h5 className="form-error">{errorMsg.message}</h5>}

						<ButtonContainer>Send</ButtonContainer>
					</form>
					{emailSent ? <h1>Email has been sent</h1> : null}
				</div>
			</div>
		</div>
	);
};

export default Contact;
