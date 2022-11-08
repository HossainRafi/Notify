import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h3>Friends Birthday</h3>
      <Link to="/frnddetails">Friends Details</Link>
      <Link to="/frndbirthday">Todays Birthday</Link>
    </div>
  );
};

export default Home;
