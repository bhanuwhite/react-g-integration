import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import $ from "jquery";
const { REACT_APP_API_URL } = process.env;

const ViewProfile = () => {
  const [currentUser, setCurrentUser] = useState({ firstName: "",
  lastName: " ",
  email: " ",
  phone: "",})
  const userId = _.get(
    JSON.parse(localStorage.getItem("user-info")),
    "_id",
    ""
  );

  console.log(userId, "userid");
  const FetchcurrentUser = () => {
    axios
      .get(`${REACT_APP_API_URL}/user/getUserById/${userId}`)
      .then((res) => {
        if(res.status===200){
         const { firstName, lastName, email, phone} = _.get(res,"data.data"," ")
          setCurrentUser({...currentUser, firstName:firstName, lastName:lastName,email:email,phone:phone})
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  console.log(currentUser,"curretUser")
  useEffect(() => {
    FetchcurrentUser();
  }, []);

  return (
    <>
      <div class="btn-group">
        <a
          class="dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src="/images/user-profile.png" alt="" class="user-img" />
        </a>
        <div class="dropdown-menu p-3">
          <div class="d-flex justify-content-start">
            <h5>Username:</h5>
            <h5 class="ml-1 drop-details">  {currentUser.firstName+currentUser.lastName}</h5>
          
          </div>
          <div class="d-flex justify-content-start">
            <h5>Email:</h5>
            <h5 class="ml-1 drop-details ">     {currentUser.email}</h5>
       
          </div>
          <div class="d-flex justify-content-center mt-2">
            <button
              type="button"
              class="btn btn-primary"
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
    </>
  );
};

export default ViewProfile;
