import "./First.css";
import star from "./star_purple500_24px.jpg";
import avatar from "./Avatar.jpg";
import cover from "./Image.jpg";
import React from "react";
import { DarkMode } from "../Theme/theme";
import {useContext } from "react"

function First(props) {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  const { text, name, profile } = props;
  return (
    <div className="first" style={{ backgroundColor: darkMode && "white" }}>
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
        <img src={profile} />
        <marquee style={{color: darkMode && "grey" }}>{name}</marquee>
      </div>
    </div>
  );
}

export default First;
