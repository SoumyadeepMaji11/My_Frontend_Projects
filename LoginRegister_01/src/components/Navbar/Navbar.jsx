import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';
import './nav.css';
const Navbar = () => {
  return (
    <>
      <head>
          <Helmet>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          </Helmet>
      </head>
      <body>
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="wrapper">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </body>
    </>
  );
};

export default Navbar;
