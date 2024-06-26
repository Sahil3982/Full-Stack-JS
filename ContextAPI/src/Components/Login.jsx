/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <>
      <center>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></input><br></br>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </center>
    </>
  );
};

export default Login;
