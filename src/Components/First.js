import "./First.css";
import star from "./star_purple500_24px.jpg";
import avatar from "./Avatar.jpg";
import cover from "./Image.jpg";
import React from "react";

function First(props) {
  const { text, name, profile } = props;
  return (
    <div className="first">
      <div className="star">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="profile">
        <img src={profile}  />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default First;
