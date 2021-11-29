/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import searchImg from "../images/search.png";
import $ from "jquery";
import userProfileImg from "../images/user-profile.png";
import userOptionImg from "../images/user-option.png";



const Header = () => {


//   const [logout, setlogout] = useState()

//   const getToken =JSON.parse(localStorage.getItem("token")) 



// // const handleSubmit = () =>{

// // }
// const handlelogout = () =>{
//   setlogout(getToken)
// }
console.log(localStorage.getItem("token") ,"token")

  return (
    <header>
      <div className="header-wrapper">
        <div className="row no-gutters">
          <div className="col-md-6 col-6">
            <div className="search-box">
              <div className="form-group">
                <span className="form-control-feedback">
                  <img src={searchImg} alt="search icon" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-6 text-right">
            <div className="user-action">
              <div>
                <Button variant="danger" className="mx-2" >
                  Logout
                </Button>
              </div>
              <p>
                John Doe
                <span>Analyst</span>
              </p>
              <div className="user-image">
                <div className="status"></div>
                <img src={userProfileImg} alt="user" />
              </div>
              <div className="btn-group">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={userOptionImg}
                    alt="options"
                    className="user-options"
                  />
                </a>
                <div className="dropdown-menu p-3">
                  <div className="d-flex justify-content-start">
                    <h5>Username:</h5>
                    <h5 className="ml-1 drop-details">email</h5>
                  </div>
                  <div className="d-flex justify-content-start">
                    <h5>Email:</h5>
                    <h5 className="ml-1 drop-details ">email</h5>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="edit-profile"
                      onClick={() => {
                        $(".model-fade").show(300);
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
