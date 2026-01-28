import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // to update user context on login and setUser is from UserContext

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload from data loss during form submission
    setUser({ username, password });
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
