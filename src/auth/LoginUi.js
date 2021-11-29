import React, { useState, useEffect } from "react";
import { useHistory, useLocation,} from "react-router-dom";
import "./Login.css";
import _ from 'lodash'
import GoogleLogin from "react-google-login";
import TwitterLogin from "react-twitter-login";
import axios from "axios";
import { data } from "jquery";
const { REACT_APP_API_URL } = process.env;
const {REACT_APP_GOOGLE_DRIVE_CLIENT_ID}  = process.env;
const LoginUi = () => {
  const history = useHistory();
  let location = useLocation();
  const initialState = {
    email: "",
    password: "",
  };

  const Login = (data) => {
    axios({
      method: "POST",

      url: `${REACT_APP_API_URL}/user/userLogin`,
      data: data,
    })
      .then((res) => {
        console.log(res,"res...");
        if(res.status === 200){
          return res.data
        }
      }).then((res) => {
        if(res){
           localStorage.setItem('user-info', JSON.stringify(_.get(res,'data','')))
           localStorage.setItem('token', _.get(res,'token'))
           history.replace("/dashboard")
        }
      })
      .catch((err) => {
        console.log(err,"err");
        alert("please enter the correct credentials")

      });
  };

  const [formData, setFormData] = useState(initialState);
  // function auth() {
  //   const reg = JSON.parse(localStorage.getItem("users"));
  //   if (reg) {
  //     return Boolean(
  //       reg.find((eachUser) => {
  //        console.log(eachUser,"eachUseer")
  //         return (
  //           eachUser.email === formData.email &&
  //           eachUser.password === formData.password
  //         );
  //       })
  //     );
  //   }
  //   console.log(reg, "reg");
  // }
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    Login({
      email,
      password,
    });
    setFormData(initialState);
  };

  const responseGoogle = (response) => {
    console.log(response,"response");
    history.push("/dashboard")
  };

  return (
    <>
      <div className="container" id="container">
        <div
          className="form-container sign-in-container"
          id="sign-in-container"
        >
          <form action="#">
            <h1>Sign in</h1>
            <span>or use your account</span>
            <div className="input-field">
              <div className="svg-container start">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="input-field">
              <div className="svg-container start">
                <i className="fad fa-lock"></i>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
              />
            </div>

            <a href="#">Forgot your password?</a>
            <button type="button" onClick={handleSubmit}>
              Sign In
            </button>
            <br />
            <div>
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_DRIVE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
            <div>
              {/* <TwitterLogin
      authCallback={authHandler}
      consumerKey={CONSUMER_KEY}
      consumerSecret={CONSUMER_SECRET}
    /> */}
            </div>

            <a id="mobile-up" name="signup">
              Sign Up <i className="fa fa-arrow-right"></i>
            </a>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>New here ?</h1>
              <br />

              <button
                onClick={() => history.push("/signup")}
                className="ghost"
                id="signUp"
                name="signup"
                type="button"
                value="signup"
              >
                Sign Up
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUi;
