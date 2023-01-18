import React, { useEffect, useState } from "react";
import "./signinForms.css";
import google from "../assets/google.svg";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      values.password.length < 7 ||
      !passwordRegex.test(values.password)
    ) {
      errors.password = "Wrong password";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("object");
    }
  }, [formErrors, isSubmit, formValues]);

  return (
    <div className="container signup-container">
      <h1 className="heading">Log in</h1>
      <form action="/" className="login-form" onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="success">Registration Successful</div>
        ) : (
          <div></div>
        )}
        <div className="form-item">
          <label htmlFor="email">Email*</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            placeholder="Email"
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="form-item">
          <label htmlFor="password">Password*</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            placeholder="Password"
          />
        </div>
        <p>{formErrors.password}</p>
        <button className="primary-btn full form-btn">Sign Up</button>
        <div className="form-divider">
          <div className="dividing-line"></div>
          <div className="divider-txt">or Sign up with Google</div>
          <div className="dividing-line"></div>
        </div>
        <button className="primary-btn full form-btn google-btn">
          <img src={google} alt="Google Logo" className="google-logo" />
          Sign up with Google
        </button>
      </form>
      <div className="dontHaveAccount">
        Don't have an account? <strong>Sign up</strong>
      </div>
    </div>
  );
}