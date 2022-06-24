import React from "react";
import Navbar from "./Navbar/Navbar";

const About = () => {

  var styles = {
    p:{
      fontSize:"70px",
      position: "relative",
      top: "5%",
      textAlign: "center",
      fontFamily: "cursive"
    },
    p1:{
      fontSize:"50px",
      position: "relative",
      top: "10%",
      textAlign: "center",
      fontFamily: "cursive"
    },
    p2:{
      fontSize:"50px",
      position: "relative",
      top: "50%",
      textAlign: "center",
      fontFamily: "cursive"
    }
  }

  return (
    <div className="about">
      <p style={styles.p}>Login-Registration Demo 01</p>
      <p style={styles.p1}>This is a Login-Registration demo page in ReactJS using Html, css, and Javascript </p>
      <p style={styles.p2}>Designed by :: Soumyadeep Maji</p>
      <Navbar />
    </div>
  );
};

export default About;
