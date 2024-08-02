import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        nameError: "",
        passwordError: "",
        emailError: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const validateName = (name) => {
        let nameError = errorMsg.nameError;
        let valid = formValid;
        if (name.trim().length === 0) {
            valid = false;
            nameError = "This is required";
        } else if (name.trim().length <= 2) {
            valid = false;
            nameError = "This is invalid!";
        } else {
            valid = true;
            nameError = "";
        }
        setFirstName(name);
        setFormValid(valid);
        setErrorMsg({ ...errorMsg, nameError });
        return formValid;
    };
    const validateEmail = (email) => {
        let emailError = errorMsg.emailError;
        let valid = formValid;
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email)) {
            valid = false;
            emailError = "This is invalid!";
        } else {
            valid = true;
            emailError = "";
        }
        setEmail(email);
        setFormValid(valid);
        setErrorMsg({ ...errorMsg, emailError });
        return formValid;
    };
    const validatepassword = (password) => {
        let passwordError = errorMsg.passwordError;
        let valid = formValid;
        let regexPassword=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if (!regexPassword.test(password)) {
            valid = false;
            passwordError = "This is invalid";
        } else {
            valid = true;
            passwordError = "";
        }
        setPassword(password);
        setFormValid(valid);
        setErrorMsg({ ...errorMsg, passwordError });
        return formValid;
    };

    const handleSubmit = () => {
        if (validateName(firstName) && validatepassword(password) && validateEmail(email)) {
            let user = { firstName,email,password};
            setSubmittedData(user);
            setShowModal(true);
            setFirstName("");
            setPassword("");
            setEmail("");
        }
    };

    const handleChange = (e) => {
        if (e.target.id === "firstName") {
            validateName(e.target.value);
        }
        if (e.target.id === "email") {
            validateEmail(e.target.value);
        }
        if (e.target.id === "password") {
            validatepassword(e.target.value);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card w-50 mx-auto">
                <div className="card-body ">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Please enter your name"
                                onChange={handleChange}
                                value={firstName}
                            />
                            <small className="text-danger">{errorMsg.nameError}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Enter Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Please enter your email"
                                onChange={handleChange}
                                value={email}
                            />
                            <small className="text-danger">{errorMsg.emailError}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Enter Password:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder="Please enter your password"
                                onChange={handleChange}
                                value={password}
                            />
                            <small className="text-danger">{errorMsg.passwordError}</small>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {submittedData && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Submitted Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Name:</strong> {submittedData.firstName}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Password:</strong> {submittedData.password}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}
