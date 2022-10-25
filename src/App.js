import React from "react";
import Meeting from "./meeting.jpg";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="Main">
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
      <div className="Meeting">
        <div className="discription">
          <div className="dis1">
            <div className="header2">
              <p>Your Hub for teamwork</p>
            </div>
            <div className="dis2">
              <p>
                Give everyone you work with—inside and outside your company—a
                more productive way to stay in sync. Respond faster with emoji,
                keep conversations focused in channels, and simplify all your
                communication into one place.
              </p>
            </div>
            <div className="learn">
              <Button variant="link">Learn more</Button>
            </div>
          </div>
        </div>
        <div className="meeting">
          <img src={Meeting} />
        </div>
      </div>
      <div className="Meeting">
        <div className="discription">
          <div className="dis1">
            <div className="header2">
              <p>Your Hub for teamwork</p>
            </div>
            <div className="dis2">
              <p>
                Give everyone you work with—inside and outside your company—a
                more productive way to stay in sync. Respond faster with emoji,
                keep conversations focused in channels, and simplify all your
                communication into one place.
              </p>
            </div>
            <div className="learn">
              <Button variant="link">Learn more</Button>
            </div>
          </div>
        </div>
        <div className="meeting">
          <img src={Meeting} />
        </div>
      </div>
      <div className="Meeting">
        <div className="discription">
          <div className="dis1">
            <div className="header2">
              <p>Your Hub for teamwork</p>
            </div>
            <div className="dis2">
              <p>
                Give everyone you work with—inside and outside your company—a
                more productive way to stay in sync. Respond faster with emoji,
                keep conversations focused in channels, and simplify all your
                communication into one place.
              </p>
            </div>
            <div className="learn">
              <Button variant="link">Learn more</Button>
            </div>
          </div>
        </div>
        <div className="meeting">
          <img src={Meeting} />
        </div>
      </div>
    </div>
  );

}

export default App;
