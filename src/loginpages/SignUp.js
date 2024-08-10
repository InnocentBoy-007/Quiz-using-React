import React from "react";
import { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
function SignUpForm() {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        const { name, email, password } = state;
        if (name === "" || email === "" || password === "") {
            setAlertDisplay(true);
        }
        evt.preventDefault();

        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };

    // alert handler
    const [alertDisplay, setAlertDisplay] = useState(false);

    // hides the alert on click
    const hideAlert = () => setAlertDisplay(false)

    return (
        <Container>

            <div className="form-container sign-up-container">
                <Alert show={alertDisplay}>
                    Need input
                </Alert>
                <form onSubmit={handleOnSubmit}>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-google-plus-g" />
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={(evt) => {
                            handleChange(evt);
                            setTimeout(() => {
                                hideAlert();
                            }, 800);

                        }}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={(evt) => {
                            handleChange(evt);
                            setTimeout(() => {
                                hideAlert();
                            }, 800);
                        }}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={(evt) => {
                            handleChange(evt);
                            setTimeout(() => {
                                hideAlert();
                            }, 800);
                        }}
                        placeholder="Password"
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        </Container>
    );
}

export default SignUpForm;
