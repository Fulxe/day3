import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  <div className="navbar">
    <Logo />
    <div className="navbar-right">
      <label className="switch">
        <input type="checkbox"></input>
        <span class="slider-round"></span>
      </label>
      <div className="nv-text">
        <Link to="/Products">Product</Link>
      </div>
      <div className="nv-text">Services</div>
      <div className="nv-text">Contact</div>
      <div className="nv-text">Log in</div>
      <div className="nv-tex">
        <p>
          <Link to="/Get-Access">Get Access</Link>
        </p>
      </div>
    </div>
  </div>;
}
function Logo() {
  return (
    <div className="navbar-left">
      <p>Team</p>
      <div></div>
    </div>
  );
}
export default Navbar;
