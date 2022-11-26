import React from "react";
import "./serv.css";
import img1 from "./img1.jpg"

function Serv() {
  return (
    <div className="nuur">
      <div className="tuv">
        <div className="tolgoi">
          <h1 className="move">Our Services</h1>
        </div>
        <div className="tseeej">
           <div className="hsg1">
            <img src={img1}/>
            <div className="hsg1-1"> 
            <p> Web development</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Serv;
