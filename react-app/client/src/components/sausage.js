import React from "react";
import "./sausage.css";

const SausageCard = ({ sausage }) => {
  return (
    <div key={sausage.name} className="sausage-card">
      <h2>{sausage.name}</h2>
      <img src={require(`../images/${sausage.photo}`)} alt={sausage.name} />
      <p>{sausage.description}</p>
      <p>Weight: {sausage.weight}</p>
      <p>Owner: {sausage.owner_first_name} {sausage.owner_last_name}</p>
      <p>Phone: {sausage.owner_phone}</p>
      <p>City: {sausage.owner_city}</p>
    </div>
  );
};

export default SausageCard;

