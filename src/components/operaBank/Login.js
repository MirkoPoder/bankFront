import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    console.log("password", password);
    console.log("username", username);
    sessionStorage.setItem("username", username);
  }
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2 className="font-weight-bold">Company</h2>
      </div>
      <div className="mb-3">
        <form method="POST" action="login" align="middle" onClick={handleLogin}>
          <input
            id="username"
            type="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            className="form-control"
          />
          <br />
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="form-control"
          />
          <hr className="mb4" />
          <button
            type="submit"
            id="login"
            name="login"
            value="Log in"
            className="btn btn-primary btn-sm btn-block"
          >
            Log in
          </button>
        </form>
      </div>
      <div>
        <a href="/register" className="btn btn-secondary btn-sm btn-block">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;
