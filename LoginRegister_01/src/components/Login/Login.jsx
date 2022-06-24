import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./login.css";
import "./button.css";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const senduser = {
      username: user.username,
      password: user.password,
    };
    alert('Username is : ' + user.username + ' \nPassword is : ' + user.password);
    console.log(senduser);
  };


  return (
    <>
      <form onSubmit={submitForm}>
        <div className="card">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="card-inner">
            <div className="content">
              <h2>Login</h2>
              <h2>Login</h2>
            </div>

            <div
              style={{ top: "38%", left: "14%" }}
              className="input-container"
            >
              <input
                type="text"
                name="username"
                className="text-input"
                placeholder="Enter Your Username"
                onChange={handleChange}
                value={user.username}
                required
              />
              <label className="label">Username</label>
            </div>

            <div
              style={{ top: "45%", left: "14%" }}
              className="input-container"
            >
              <div class="input-group mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="text-input"
                  placeholder="Enter Your Password"
                  aria-label="User's password"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
                <label className="label">Password</label>
              </div>
            </div>
            <div className="button">
              <button className="btnGradient" type="submit" value="login">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <Navbar />
    </>
  );
};

export default Login;
