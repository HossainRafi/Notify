import React from "react";
import { Link } from "react-router-dom";
import data from "../components/data.js";
import FrndData from "./FrndData.js";

const FrndDetails = () => {
  return (
    <div className="container">
      <h3>Todays Birthday</h3>
      <FrndData friend={data} />
      <Link to="/frnddetails">Friends Details</Link>
    </div>
  );
};

export default FrndDetails;
