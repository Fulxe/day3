import React from "react";
import Meeting from "./meeting.jpg";
import Hall from "./e3.jpg";
import "./App.css";
import { Button } from "react-bootstrap";
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
import { useContext } from "react";

function App() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  console.log(darkMode);
  return (
    <div
      className={`Main ${darkMode && "grey"}`}
      style={{ color: darkMode && "white" }}
    >
      <div className="Header">
        <div className="navbar">
          <Logo />
          <div className="navbar-right">
            <label className="switch">
              <input type="checkbox" onChange={ToggleSwitch}></input>
              <span class="slider-round"></span>
            </label>
            <div className="nv-text">
              <Link to="/Products">Product</Link>
            </div>
            <div className="nv-text">Services</div>
            <div className="nv-text">Contact</div>
            <div className="nv-text"><Link to="/Login">Login</Link></div>
            <div className="nv-tex">
              <p>
                <Link to="/Get-Access">Get Access</Link>
              </p>
            </div>
          </div>
        </div>
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
      <div className={`product1 ${darkMode && "grey"}`}>
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
      <div className="product2">
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
      <div className="footer" style={{ backgroundColor: darkMode && "greyno" }}>
        <div className="footer1">
          <div className="left">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p>Instagram</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <p>Twitter</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p>Instagram</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <p>Twitter</p>
            </div>
          </div>
          <div className="center">
            <div className="c-left">
              <div className="Tag">Use cases</div>
              <div className="social">UI Design</div>
              <div className="social">UX Design</div>
              <div className="social">Prototyping</div>
              <div className="social">UI Design</div>
              <div className="social">UX Design</div>
              <div className="social">Prototyping</div>
            </div>
            <div className="c-left">
              <div className="Tag">Explore</div>
              <div className="social">Figma</div>
              <div className="social">Customers</div>
              <div className="social">Why I Love Figma</div>
              <div className="social">Figma</div>
              <div className="social">Customers</div>
              <div className="social">Why I Love Figma</div>
            </div>
            <div className="c-left">
              <div className="Tag">Resources</div>
              <div className="social">Community Resources Hub</div>
              <div className="social">Support</div>
              <div className="social">Education</div>
              <div className="social">Community Resources Hub</div>
              <div className="social">Support</div>
              <div className="social">Education</div>
            </div>
          </div>
          <div className="right">
            <div className="mail">
              <div className="sub">Subscribe to our newsletter</div>
              <div>
                <input placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
