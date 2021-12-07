/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { gapi } from "gapi-script";
import Header from "../../components/header/Header";
import Main from "./Main";
import "./Dashboard.css";
import SideMenu from "../../components/sidemenu/SideMenu";

const { REACT_APP_GOOGLE_DRIVE_API_KEY, REACT_APP_GOOGLE_DRIVE_CLIENT_ID } =
  process.env;

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <div className="main-wrapper">
        <SideMenu />
        <div className="content-wrapper">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
