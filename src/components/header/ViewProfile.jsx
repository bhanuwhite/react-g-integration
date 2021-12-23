/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import $ from "jquery";
import EditProfile from "./EditProfile";
import userProfileImg from "../../images/user-profile.png";

const { REACT_APP_API_URL } = process.env;

const ViewProfile = () => {
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: " ",
    email: " ",
    phone: "",
  });
  const userId = _.get(
    JSON.parse(localStorage.getItem("user-info")),
    "_id",
    ""
  );
  const FetchcurrentUser = () => {
    axios
      .get(`${REACT_APP_API_URL}/user/getUserById/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          const { firstName, lastName, email, phone } = _.get(
            res,
            "data.data",
            " "
          );
          setCurrentUser({
            ...currentUser,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
          });
        }
      })                       

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchcurrentUser();
  //   if(localStorage.getItem("token")){
  //     FetchcurrentUser();
  //   }
  }, []);

  return (
    <>
      <div className="btn-group">
        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={userProfileImg} alt="" className="user-img" />
        </a>
        <div className="dropdown-menu p-3">
          <div className="d-flex justify-content-start">
            <h5>Username:</h5>
            <h5 className="ml-1 drop-details">
              {" "}
              {currentUser.firstName + currentUser.lastName}    
            </h5>
          </div>
          <div className="d-flex justify-content-start">          
            <h5>Email:</h5>
            <h5 className="ml-1 drop-details "> {currentUser.email}</h5>
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
        <div className="model-fade">      
          <div className="container">
            <div
              className="d-flex justify-content-end mt-1 cross-model"
              id="cross-model"            
            >
              <a href="#">
                <button
                  className="close"
                  onClick={() => {
                    $(".model-fade").hide(300);
                  }}
                >
                  &times;
                </button>
              </a>
            </div>
            <EditProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
