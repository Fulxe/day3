import "./Second.css";
import avatar from "./Avatar.jpg";
import cover from "./Image.jpg";
import React from "react";

function Second(props) {
  const { text, heading, image, name } = props;
  return (
    <div className="second21">
      <img src={image} />
      <div className="garchig">
        <p>{heading}</p>
      </div>
      <div className="paragraph">
        <p>{text}</p>
      </div>
      <div className="info">
        <img src={avatar} />
        <p>{name}</p>
        <div></div>
        <p>2nd January,2022</p>
      </div>
    </div>
  );
}

export default Second;
