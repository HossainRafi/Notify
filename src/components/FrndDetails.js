import React from "react";
import { Link } from "react-router-dom";
import FrndDataAll from "./FrndDataAll";
import data from "../components/data.js";

const FrndDetails = () => {
  return (
    <div className="container">
      <h3>Friends Birthday Details</h3>
      <FrndDataAll friend={data} />
      <Link to="/frndbirthday">Todays Birthday</Link>
    </div>
  );
};

export default FrndDetails;
