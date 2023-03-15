import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../Actions/authAction";


function Auth() {
  const initialData = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const [isSignup, setIsSignup] = useState(false);
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      data.password === data.confirmpass
        ? dispatch(signUp (data))
        : setConfirmPass(false);
    }else{
      dispatch(logIn(data))
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData(initialData);
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>ChatBox</h1>
          <h6>Expole the ideas throughout the world</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form action="" className="infoForm authform" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign up" : "Log In"}</h3>

          {isSignup && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              name="username"
              className="infoInput"
              placeholder="User Name"
              id=""
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="infoInput"
              placeholder="Password"
              id=""
              onChange={handleChange}
              value={data.password}
            />
            {isSignup && (
              <input
                type="password"
                name="confirmpass"
                className="infoInput"
                placeholder="Confirm Password"
                id=""
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          {!confirmPass && (
            <div>
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                }}
              >
                * Confirm password is not same!
              </span>
            </div>
          )}

          <div>
            <span
              style={{
                fontSize: "13px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignup((prev) => !prev);
              }}
            >
              {isSignup
                ? "Already have an accound!.Log In"
                : "Don't have an account Sign up"}
            </span>
          </div>

          <button className="button infoButton" type="submit" disabled={loading}>
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
