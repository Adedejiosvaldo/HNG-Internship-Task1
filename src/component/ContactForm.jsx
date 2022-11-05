import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactForm from "../styles/contactForm.module.css";
export const ContactForm = () => {
  const navigate = useNavigate();
  const [first, setfirst] = useState(false);
  const [message, setMessage] = useState(false);
  const [second, setSecond] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const firstNameHandler = (e) => {
    setFirstname(e.target.value);

    if (firstname.length <= 0) {
      setfirst(true);
    } else {
      setfirst(false);
    }
  };

  const secondNameHandler = (e) => {
    setLastName(e.target.value);

    if (lastName.length <= 0) {
      setSecond(true);
    } else {
      setSecond(false);
    }
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);

    if (message.length <= 0) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (firstname.length <= 0) {
      setfirst(true);
    } else {
      setfirst(false);
    }

    if (lastName.length <= 0) {
      setSecond(true);
    } else {
      setSecond(false);
    }
  };

  const checkboxHandler = () => {
    setCheckbox(true);
    setButtonDisabled(false);
  };
  return (
    <div className={contactForm.container}>
      <form action='POST' onSubmit={formHandler}>
        <h2>Contact Me</h2>

        <div className={contactForm.name__div}>
          <div id={contactForm.firstName}>
            <label htmlFor={contactForm.first_name}>
              First Name
              <input
                id={contactForm.first_name}
                type='text'
                value={firstname}
                onChange={firstNameHandler}
                style={{ borderColor: first ? "red" : "" }}
                placeholder='Enter your first name'
              />
              <p style={{ fontSize: "10px", color: "red", marginTop: "-15px" }}>
                {first ? <h3>You need to fill in a name</h3> : ""}
              </p>
            </label>
          </div>

          <div>
            <label htmlFor={contactForm.last_name}>
              {" "}
              Last Name
              <input
                id={contactForm.last_name}
                type='text'
                value={lastName}
                style={{ borderColor: second ? "red" : "" }}
                onChange={secondNameHandler}
                placeholder='Enter your last name'
              />
              <p style={{ fontSize: "10px", color: "red", marginTop: "-15px" }}>
                {second ? <h3>You need to fill in a name</h3> : ""}
              </p>
            </label>
          </div>
        </div>

        <label htmlFor={contactForm.email}>
          Email
          <input
            id={contactForm.email}
            type='email'
            placeholder='yourname@email.com'
          />
          <p
            style={{
              fontSize: "10px",
              fontWeight: "400",
              color: "red",
              marginTop: "-15px",
            }}
          >
            {second ? <h3>Email Address is required</h3> : ""}
          </p>
        </label>

        <label htmlFor={contactForm.message}>
          Message
          <textarea
            id={contactForm.message}
            rows='3'
            cols='40'
            value={message}
            onChange={setMessage}
            type='text'
            placeholder="Send me a message and i'll reply you as soon as possible"
          />
          <p
            style={{
              fontSize: "10px",
              fontWeight: "400",
              color: "red",
              marginTop: "-15px",
            }}
          >
            {second ? <h3>Message Cannot be empty</h3> : ""}
          </p>
        </label>

        <div
          style={{
            display: "flex",
            justifyContent: "left",
            justifyItems: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <input
            type='checkbox'
            checked={checkbox}
            onClick={checkboxHandler}
            id={contactForm.checkbox__check}
          />
          <label id={contactForm.label} htmlFor={contactForm.checkbox__check}>
            You agree to providing your data to Joseph who may contact you
          </label>
        </div>

        <button
          type='submit'
          id={contactForm.button}
          disabled={buttonDisabled}
          style={{
            backgroundColor: "#175CD3",
            opacity: buttonDisabled ? "40%" : "100",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
