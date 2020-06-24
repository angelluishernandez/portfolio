import React from "react";
import { useState } from "react";
import portfolioService from "../../services/portfolioService";
import ContactForm from "./ContactForm";

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
		console.log(emailForm);
		const emailToSend = {
			name: emailForm.name,
			email: emailForm.email,
			subject: emailForm.subject,
			message: emailForm.message,
		};

		console.log(emailToSend, "!!!!!!!!!!!!!");
		handleValidation({ ...emailToSend });

		if (!errors) {
			portfolioService
				.sendEmailToApi({ ...emailToSend })
				.then((response) => {
					if (response) resetForm();
					setEmailSent(true);
				})
				.catch((error) => console.log(error));
		}
	};

	const props = {
		handleSubmit,
		errors,
		errorMsg,
		emailSent,
		setEmailForm,
		emailForm,
	};

	return <ContactForm {...props} />;
};

export default Contact;
