import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function LoginApp() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (usernameInput !== "user" || passwordInput !== "password") {
      setLoginError("Invalid credentials. Please try again.");
    } else {
      setLoginError("");
      setLoginSuccess("Welcome back, user!");
    }
  };

  return (
    <div className="LoginApp">
      <h1>Sign In</h1>
      {loginError ? <p className="error">{loginError}</p> : null}

      {loginSuccess === "" ? (
        <form onSubmit={handleLogin}>
          <div className="form-container">
            <div className="input-field">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
            </div>
            <button type="submit">Log In</button>
          </div>
        </form>
      ) : (
        <p className="success">{loginSuccess}</p>
      )}
    </div>
  );
}

export default LoginApp;
