import { React, axios, useContext } from "react";
import Meeting from "./meeting.jpg";
import Hall from "./e3.jpg";
import "./App.css";
import { Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./e2.jpg";
import Event1 from "./Group 18.jpg";
import About from "./First/First";
import pro from "./jane.jpg";
import pro2 from "./eleon.jpg";
import avatar from "./First/Avatar.jpg";
import pro3 from "./amy2.jpg";
import { Link } from "react-router-dom";
import { DarkMode } from "./Theme/theme";
import Footer from "./Footer/footer";

function App() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  return (
    <div
      className={`Main ${darkMode && "grey"}`}
      style={{ color: darkMode && "white" }}
    >
      <div className="Header">
        <div className="product">
          <div className="pro">
            <div className="grchg">
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
      <div className="Meeting" style={{ color: darkMode && "white" }}>
        <div className="animation">
          <div className={`huree ${darkMode && "grey"}`}>
            <div className="discription">
              <Task
                text={
                  "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
                }
                header={"Your Hub for teamwork"}
              />
            </div>
            <div className="meeting">
              <img src={Meeting} />
            </div>
          </div>
        </div>
      </div>
      <div className={`product1 ${darkMode && "grey"}`}>
        <div className="animation">
          <div className={`huree ${darkMode && "grey"}`}>
            <div className="bck-img">
              <img src={Event} />
              <img src={Hall} />
            </div>
            <Task
              text={
                "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
              }
              header={"Simple task management"}
            />
          </div>
        </div>
      </div>
      <div className="product2">
        <div className="animation">
          <div className={`huree ${darkMode && "grey"}`}>
            <div className="discription">
              <Task
                text={
                  "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
                }
                header={"Scheduling that actually works"}
              />
            </div>
            <div className="pro2">
              <img src={Event1} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="h1">What people say about us</div>
        <div className="says">
            <About
              text={
                "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
              }
              name={"Amy Klassen"}
              profile={avatar}
            />
            <About
              text={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
              name={"Jane Cooper"}
              profile={pro}
            />
            <About
              text={
                "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
              }
              name={"Eleanor Pena"}
              profile={pro2}
            />
            <About
              text={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
              name={"Amy Klassen"}
              profile={pro3}
            />
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Task(props) {
  const { text, header } = props;
  return (
    <div className="dis1">
      <div className="header2">
        <p>{header}</p>
      </div>
      <div className="dis2">
        <p>{text}</p>
      </div>
      <div className="learn">
        <Button variant="link">Learn more</Button>
      </div>
    </div>
  );
}
function Logo() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  return (
    <div className="navbar-left">
      <p style={{ color: darkMode && "white" }}>Team</p>
      <div></div>
    </div>
  );
}

export default App;
