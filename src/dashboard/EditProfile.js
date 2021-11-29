import React, { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import { useHistory } from "react-router";
const { REACT_APP_API_URL } = process.env;
const EditProfile = () => {
    const history = useHistory();
  const [formData, setformData] = useState({
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
  const getCurrentUser = () => {
    const regUser =
        axios.get(`${REACT_APP_API_URL}/user/getUserById/${userId}`)
        .then((res)=>{
        
            if(res.status===200){
                const { firstName, lastName, email, phone} = _.get(res,"data.data","")
                setformData({...formData,firstName:firstName,lastName:lastName,email:email,phone:phone})
            }

        }).catch((err)=>{
            console.log(err,"err")
        })
    
    setformData({
      ...formData,
      firstName: regUser.firstName,
      lastName: regUser.lastName,
      email: regUser.email,
      phone: regUser.phone,
    });
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const putData = (updatedData) => {
      console.log(updatedData,"updatedData")
    axios
      .put(`${REACT_APP_API_URL}/user/updateUser`, updatedData)
      .then((res) => {
        console.log(res, "res");
        if(res.status===200){
            alert("update successfull")
            history.goBack();
        }
      })
      .catch((err) => {
        console.log(err, "err");
        alert("failed to update")
      });
  };
  const handleSubmit = () => {
    putData({ ...formData, _id: userId });
    
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 justify-content-center">
        <h3 className="text-center my-3">Edit Profile</h3>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">First Name:</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={_.get(formData, "firstName", "")}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Last Name: </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={_.get(formData, "lastName", "")}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Email Address:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={_.get(formData, "email", "")}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Mobile Number:</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={_.get(formData, "phone", "")}
                onChange={handleChange}
              />
              {/* //required pattern=[0-9]{10} */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
            <div className="form-group">
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
