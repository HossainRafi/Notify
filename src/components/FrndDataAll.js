import React from "react";

const FrndDataAll = ({ friend }) => {
  return friend.map((item) => {
    const { id, name, dob, image } = item;
    return (
      <div key={id} className="person">
        <img src={image} alt={name} />
        <div className="emp_details">
          <h4>{name}</h4>
          <p>DOB: {dob}</p>
        </div>
      </div>
    );
  });
};

export default FrndDataAll;
