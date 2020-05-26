import React from "react";
import { useState } from "react";
import { ButtonContainer } from "../styled-components/ButtonContainer";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [formContent, setFormContent] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormContent({
			name,
			email,
			message,
		});

		//Function to handle formContent
	};

	return (
		<div className="container Contact  d-flex">
			<div className="row">
				<div className="col-6 justify-content-center">
					<form className="form-group" onSubmit={handleSubmit}>
						<label htmlFor="">Your name </label>
						<input
							type="text"
							className="form-control"
							onChange={(e) => setName(e.target.value)}
						/>

						<label htmlFor="">Your email </label>
						<input
							type="text"
							className="form-control"
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor="">Your message </label>
						<textarea
							type="text"
							className="form-control"
							onChange={(e) => setMessage(e.target.value)}
						/>

						<ButtonContainer>Send</ButtonContainer>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
