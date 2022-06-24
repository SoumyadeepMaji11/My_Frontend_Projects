import React from "react";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  var styles = {
    h1: {
      fontSize: "100px",
      position: "relative",
      textAlign: "center",
      top: "30%",
      background: "-webkit-linear-gradient(#b3ffab 0%, #12fff7 100%)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent",
    },
    p: {
      fontSize: "70px",
      position: "relative",
      top: "35%",
      textAlign: "center",
      background: "-webkit-linear-gradient(#b3ffab 0%, #12fff7 100%)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent",
    },
  };

  return (
    <>
      <div className="home">
        <h1 style={styles.h1}>This is the Home Page</h1>
        <p style={styles.p}>Demo 01</p>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
