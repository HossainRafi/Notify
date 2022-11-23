import React from "react";

const FrndDataAll = ({ friend }) => {
  return friend.map((item) => {
    const { id, name, dob, image } = item;
    return (
      <div key={id} className="person">
        <img src={image} alt={name} />
        <div className="frnd_details">
          <h4>{name}</h4>
          <p>Date of Birth: {dob}</p>
        </div>
      </div>
    );
  });
};

export default FrndDataAll;
