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
        type="text"
        placeholder="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
