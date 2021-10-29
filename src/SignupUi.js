import React, { useState, useEffect } from "react";
import "./SignupUi.css";
import { useHistory } from "react-router-dom";
const SignupUi = () => {
  const initialState = {
    FirstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const history = useHistory();
  const [Data, setData] = useState([]);
  const [formData, setformData] = useState(initialState);

  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users, "users");

  const checkPassword = () => {
    return formData.password !== formData.confirmPassword;
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
    if(checkEmailExists()){
      alert('email exists')
    }else if(checkPassword()){
      alert('password missmatch')
    }else{
      console.log('success....')
      if (users) {
         localStorage.setItem(
          "users",
          JSON.stringify([...users, formData])
        );
      } else {
        localStorage.setItem("users", JSON.stringify([formData]));
      }
      // setTimeout(() => {
      //   alert("success")
        
      // }, 1000);

      setformData( {
        ...formData,
        FirstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }

    // history.push('/')
  };
  console.log(JSON.parse(localStorage.getItem("users")), "Local Storage");
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const { FirstName, lastName, email, password, confirmPassword } = formData;
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
                    name="FirstName"
                    className="form-control"
                    id="name"
                    onChange={handleChange}
                    value={FirstName}
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
                    type="text"
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
                    type="text"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupUi;
