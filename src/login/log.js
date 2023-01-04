import "./log.css";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [firstName, setfirstName] = useState([]);
  const [password, setlastName] = useState([]);

  const create = () => {
    axios
      .get("http://localhost:2000", {
        firstName: firstName,
        password,
      })
      .then((res) => {
        console.log(res);
      },
      (error) => {
        console.log(error)
      }
      );
  };

  return (
    <div>
      <div className="main">
        <div class="box">
          <form autocomplete="off">
            <h2>Log in</h2>
            <div class="inputBox">
              <input
                type="firstName"
                required="required"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <span>Userame</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input
                type="lastName"
                required="required"
                onChange={(e) => setlastName(e.target.value)}
              />
              <span>lastName</span>
              <i></i>
            </div>
            <div class="links">
              <a href="#">Forgot Password ?</a>
              <a href="#">Log up</a>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
