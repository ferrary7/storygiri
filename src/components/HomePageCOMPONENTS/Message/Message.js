import React, { useState } from "react";
import "./Message.css";
import insta from "../../../assets/instagram.svg";
import yt from "../../../assets/youtube.svg";
import mail from "../../../assets/email.svg";
import lnkd from "../../../assets/linkedinD.svg";

function Message() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="responsive-container">
      <div className="left-column">
        <h2 className="content-header">
          Would love to hear from you, <br /> Get in touch👋{" "}
        </h2>
        <div className="social-links">
          <a
            href="https://www.instagram.com/storygiri/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} style={{height: '40px'}} alt="" />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=storygiri"
            target="_blank"
            rel="noreferrer"
          >
            <img src={yt} style={{height: '40px'}} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/storygiri/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lnkd} style={{height: '40px'}} alt="" />
          </a>
          <a href="https://gmail.com" target="_blank" rel="noreferrer">
            <img src={mail} style={{height: '40px'}} alt="" />
          </a>
        </div>
      </div>
      <div className="right-column">
        <form
          className="form"
          action="mailto:shubham@storygiri.com"
          method="post"
          enctype="text/plain"
        >
          <label>
            <input
              placeholder="Name"
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Your email"
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <textarea
              placeholder="Your message"
              className="form-input textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="form-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
