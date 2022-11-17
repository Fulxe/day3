import "./log.css";

function Login() {
  return (
    <div>
      <div className="main">
        <div class="box">
          <form autocomplete="off">
            <h2>Log in</h2>
            <div class="inputBox">
              <input type="text" required="required" />
              <span>Userame</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div class="links">
              <a href="#">Forgot Password ?</a>
              <a href="#">Log up</a>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login;
