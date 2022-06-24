import React from 'react'
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./button-1.css";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({ email:"",username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const senduser = {
      email:user.email,
      username: user.username,
      password: user.password,
    };
    alert('Email is : '+ user.email + ' \nUsername is : ' + user.username + ' \nPassword is : ' + user.password);
    console.log(senduser);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="card">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="card-inner">

          <div className="content-r">
              <h2>Register</h2>
              <h2>Register</h2>
            </div>


          <div
              style={{ top: "30%", left: "14%" }}
              className="input-container"
            >
              <input
                type="text"
                name="email"
                className="text-input"
                placeholder="Enter Your Email ID"
                onChange={handleChange}
                value={user.email}
                required
              />
              <label className="label">Email ID</label>
            </div>

            <div
              style={{ top: "35%", left: "14%" }}
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
              style={{ top: "40%", left: "14%" }}
              className="input-container"
            >
              <input
                type="password"
                id="password"
                name="password"
                className="text-input"
                placeholder="Enter Your Password"
                onChange={handleChange}
                value={user.password}
                required
              />
              <label className="label">Password</label>
              </div>
            <div className="button-1">
              <button className="btnGradient-1" type="submit" value="register">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
      <Navbar />
    </>
  );
};

export default Register