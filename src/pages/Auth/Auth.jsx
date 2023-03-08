import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>ChatBox</h1>
          <h6>Expole the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn />
      
    </div>
  );
}
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authform">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            name="firstname"
            className="infoInput"
            placeholder="First Name"
            id=""
          />
          <input
            type="text"
            name="lastname"
            className="infoInput"
            placeholder="Last Name"
            id=""
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            className="infoInput"
            placeholder="User Name"
            id=""
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            className="infoInput"
            placeholder="Password"
            id=""
          />
          <input
            type="text"
            name="confirmpass"
            className="infoInput"
            placeholder="Confirm Password"
            id=""
          />
        </div>
        <div>
          <span style={{ fontSize: "13px" }}>
            Already have an accound. Login!
          </span>
        </div>
        <button className="button infoButton">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
