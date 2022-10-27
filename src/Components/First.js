import "./First.css";
import star from "./star_purple500_24px.jpg";
import avatar from "./Avatar.jpg";
import cover from "./Image.jpg";
import React from "react";

function First() {
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
          <p>
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
        </div>
        <div className="profile">
          <img src={avatar} />
          <p>Amy Klassen</p>
        </div>
      </div>
  );
}

export default First;