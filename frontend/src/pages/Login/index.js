import { Button, TextField } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../store/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(UserContext);

  useEffect(() => {
    console.log(ctx);
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    ctx.auth(user.username, user.password);
    setIsLoading(false);
  };

  if (isLoading) return <p>Loading...</p>;

  return ctx.isLogged ? (
    <div>
      {console.log(ctx.isLogged)}
      <Navigate to="/" replace />
    </div>
  ) : (
    <form onSubmit={(e) => handleLogin(e)}>
      <br />
      <br />
      <TextField
        required
        name="username"
        label="Username"
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        required
        variant="outlined"
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
