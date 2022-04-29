import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const userContext = useContext(UserContext);
  const { login, isLoading } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(user);
  };

  if (isLoading) return <p>Loading...</p>;

  return userContext.user ? (
    <div>
      <Navigate to="/" replace />
    </div>
  ) : (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleLogin(e)}>
        <div className="input-container">
          <TextField
            required
            name="username"
            label="Username"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <TextField
            required
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <Button variant="contained" type="submit" endIcon={<LoginIcon />}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
