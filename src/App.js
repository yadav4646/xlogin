import React, { useState } from "react";
import "./App.css";

function LoginApp() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (usernameInput !== "user" || passwordInput !== "password") {
      setLoginError("Invalid username or password");
      setLoginSuccess(""); // Clear success message if any
    } else {
      setLoginError(""); // Clear error message if any
      setLoginSuccess("Welcome, user!");
    }
  };

  return (
    <div className="LoginApp">
      <h1>Login Page</h1>
      {loginError && <p className="error">{loginError}</p>}

      {loginSuccess === "" ? (
        <form onSubmit={handleLogin}>
          <div className="form-container">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <p className="success">{loginSuccess}</p>
      )}
    </div>
  );
}

export default LoginApp;
