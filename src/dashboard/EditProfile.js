/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import _ from "lodash";
import $ from "jquery";
import axios from "axios";
import InputField from "./InputField";

const { REACT_APP_API_URL } = process.env;

const EditProfile = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const userId = _.get(
    JSON.parse(localStorage.getItem("user-info")),
    "_id",
    ""
  );
  const getCurrentUser = async () => {
    await axios
      .get(`${REACT_APP_API_URL}/user/getUserById/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          const { firstName, lastName, email, phone } = _.get(
            res,
            "data.data",
            ""
          );
          setformData({
            ...formData,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
          });
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const putData = (updatedData) => {
    axios
      .put(`${REACT_APP_API_URL}/user/updateUser`, updatedData)
      .then((res) => {
        if (res.status === 200) {
          alert("update successfull");
          $(".model-fade").hide(300);
        }
      })
      .catch((err) => {
        console.log(err, "err");
        alert("failed to update");
      });
  };

  const handleSubmit = () => {
    putData({ ...formData, _id: userId });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    }
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 justify-content-center">
        <h3 className="text-center my-3">Edit Profile</h3>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <InputField
              name="firstName"
              label="First Name"
              value={_.get(formData, "firstName")}
              handleChange={handleChange}
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <InputField
              name="lastName"
              label="Last Name"
              value={_.get(formData, "lastName")}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <InputField
              name="email"
              label="E-mail"
              value={_.get(formData, "email")}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <InputField
              name="phone"
              label="Phone"
              value={_.get(formData, "phone")}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit ">
            <div className="form-group d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-success"
                value="Submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
