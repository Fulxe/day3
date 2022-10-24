import React from "react";
import Logo from "./team..jpg";
import "./App.css";

function App() {
  return (
    <div className="Header">
      <div className="navbar">
        <div className="navbar-left">
          <p>team</p>
          <div></div>
        </div>
        <div className="navbar-right">
          <div className="nv-text">Product</div>
          <div className="nv-text">Services</div>
          <div className="nv-text">Contact</div>
          <div className="nv-text">Log in</div>
          <div className="nv-tex">
            <p>Get Access</p>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="pro">
          <div className="text">
            <p>Instant collaborations for remote teams</p>
          </div>
          <div className="text2">
            <p>
              All in one for your remote team chats, collaboration and track
              projects
            </p>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Email"></input>
            <button>Get early access</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
