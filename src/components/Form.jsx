import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCfPassword, setErrCfPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [cfPasswordColor, setCfPasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrUsername("");
      setUsernameColor("green");
    } else {
      setErrUsername("Username must be at least 8 characters");
      setUsernameColor("red");
    }

    if (email.includes("@")) {
      setErrEmail("");
      setEmailColor("green");
    } else {
      setErrEmail("Invalid email");
      setEmailColor("red");
    }

    if (password.length >= 8) {
      setErrPassword("");
      setPasswordColor("green");
    } else {
      setErrPassword("Password must be at least 8 characters");
      setPasswordColor("red");
    }

    if (password != "" && cfPassword === password) {
      setErrCfPassword("");
      setCfPasswordColor("green");
    } else {
      setErrCfPassword("Invalid confirm password");
      setCfPasswordColor("red");
    }
  };
  return (
    <div className="container">
      <h2>Register Form</h2>
      <form className="form" onSubmit={validateForm}>
        <div className="form-control">
          <label>User name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{ borderColor: usernameColor }}
          />
          <small style={{ color: usernameColor }}>{errUsername}</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errEmail}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            value={cfPassword}
            onChange={(e) => {
              setCfPassword(e.target.value);
            }}
            style={{ borderColor: cfPasswordColor }}
          />
          <small style={{ color: cfPasswordColor }}>{errCfPassword}</small>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Form;
