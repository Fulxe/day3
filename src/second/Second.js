import "./Second.css";
import avatar from "./Avatar.jpg";
import cover from "./Image.jpg";
import React from "react";

export function Second(props) {
  const { text, heading, image, name , avatar} = props;
  return (
    <div className="second21">
      <img className="zurag" src={image} />
      <div className="garchig">
        <p>{heading}</p>
      </div>
      <div className="paragraph">
        <p>{text}</p>
      </div>
      <div className="info">
        <img className="picture" src={avatar} />
        <p>{name}</p>
        <div className="border"></div>
        <p>2nd January,2022</p>
      </div>
    </div>
  );
}

// export default Second;
