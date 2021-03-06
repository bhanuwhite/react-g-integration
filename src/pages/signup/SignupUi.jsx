import React, { useState } from "react";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SignupUi.css";

const { REACT_APP_API_URL } = process.env;

const SignupUi = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const history = useHistory();
  const [formData, setformData] = useState(initialState);

  function CreatePost() {
    const postData = {
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword,
    };
    axios
      .post(`${REACT_APP_API_URL}/user/addUser`, postData)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .then((res) => {
        if (res) {
          localStorage.setItem(
            "signup_data",
            JSON.stringify(_.get(res.data, "data", ""))
          );

          history.replace("/login");                      
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }

  const users = JSON.parse(localStorage.getItem("users"));

  const checkPassword = () => {
    return formData.password !== formData.confirmPassword;
  };
  const checkEmailField = () => {
    return formData.email.length === 0;
  };
  const checkPasswordField = () => {
    return formData.password.length === 0;
  };
  //  const checkPasswordFieldLength = () =>{
  //    return formData.password.length <=7;
  //  }
  const checkPhoneLength = () => {
    return formData.phone.length && formData.phone.length !== 10;
  };
  const checkEmailExists = () => {
    if (users) {
      const userEmails = users.map((e) => e.email);
      return userEmails.includes(formData.email);
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkPhoneLength){
      document.querySelector("#phone-limit").classList.add("error");
      document.querySelector("#phone-limit").innerHTML = "phone number must be of 10 digits"
    }
    

    if (checkEmailExists()) {
      alert("email exists");
    } else if (checkPassword()) {
      alert("password missmatch");
    } else if (checkEmailField()) {
      alert("email field cant be empty");
    } else if (checkPhoneLength()) {
      alert("phone number should be 10 digits");
    } else if (checkPasswordField()) {
      alert("password field cant be empty");
    }
    // else if (checkPasswordFieldLength){
    //   alert("password must contain 8 characters")
    // }
    else {
      CreatePost();
      //  if (users) {
      //    localStorage.setItem("users", JSON.stringify([...users, formData]));
      //    alert("SignUp Successfull");
      // history.push("/login");
      //  } else {
      //  localStorage.setItem("users", JSON.stringify([formData]));
      //    alert("signUp successfull");
      //    history.push("/login");
      //  }

      setformData({
        ...formData,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      history.push("/");
    }
  };
  const handleChange = (e) => {
      setformData({ ...formData, [e.target.name]: e.target.value });
    }
  


  const { firstName, lastName, phone, email, password, confirmPassword } =
    formData;
  return (
    <>
      <div className="container">
        <div className="row py-4 h-100">
          <div className="sign-up-cont">
            <div className="col-lg-8  col-sm-12 mx-auto">
              <h1 className="text-center my-3 heading">Sign up</h1>

              <form
                action=""
                method="POST"
                className=""
                onSubmit={handleSubmit}
              >
                <div className="mb-3 ">
                  <label htmlFor="name" className="form-label">
                    First Name{" "}
                  </label>    
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    id="name"                 
                    onChange={handleChange}
                    value={firstName}
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="name" className="form-label">
                    Last Name{" "}                         
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id="name"
                    value={lastName}
                    onChange={handleChange}
                  />                                  
                </div>
                <div className="mb-3 ">
                  <label htmlFor="name" className="form-label">
                    Phone number{" "}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    pattern="[0-9]"
                    id = "phone-limit"
                    name="phone"
                    id="phone-limit"
                    onChange={handleChange}
                    value={phone}
                  />
                   {checkPhoneLength()?<span>phone number must be of 10 digits</span>:null}
                </div>
                <div>
                </div>
      
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="form-control"
                    id="pass"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    id="pass"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="signup-butto mt-2 text-center"
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="text-center">
                  <br />
                  Already Have The Account? <br />{" "}
                  <button
                    type="button"
                    className="signup-butto mt-2 text-center"
                    onClick={() => history.push("./login")}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupUi;
