/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { gapi } from "gapi-script";
import Header from "../components/Header";
import Main from "../components/Main";
import "./Dashboard.css";
import SideMenu from "../components/SideMenu";

const { REACT_APP_GOOGLE_DRIVE_API_KEY, REACT_APP_GOOGLE_DRIVE_CLIENT_ID } =
  process.env;

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });
  /* DRIVE API STATES */
  // const DISCOVERY_DOCS = [
  //   "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  // ];

  // const [documents, setDocuments] = useState([]);

  // const listFiles = (searchTerm = null) => {
  //   gapi.client.drive.files
  //     .list({
  //       pageSize: 10,
  //       fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
  //       q: searchTerm,
  //     })
  //     .then(function (response) {
  //       const res = JSON.parse(response.body);
  //       setDocuments([...documents, res.files]);
  //     });
  // };
  
  // const handleAuthClick = () => {
  //   gapi.auth2.getAuthInstance().signIn();
  // };

  // const updateSigninStatus = (isSignedIn) => {
  //   setUserInfo({
  //     ...userInfo,
  //     email: _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.cu", ""),
  //     name: _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.Ad", ""),
  //   });

  //   if (isSignedIn) {
  //     gapi.client.drive.files
  //       .list({
  //         pageSize: 10,
  //         fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
  //         q: undefined,
  //       })
  //       .then(function (response) {
  //         const res = JSON.parse(response.body);
  //         setDocuments(res.files);
  //       })
  //       .catch((err) => {
  //         console.log(err, "err");
  //       });

  //     listFiles();
  //   } else {
  //     // prompt user to sign in
  //     handleAuthClick();
  //   }
  // };

  // const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
  // const API_KEY = REACT_APP_GOOGLE_DRIVE_API_KEY;
  // const CLIENT_ID = REACT_APP_GOOGLE_DRIVE_CLIENT_ID;

  // const initClient = () => {
  //   gapi &&
  //     gapi.client
  //       .init({
  //         apiKey: API_KEY,
  //         clientId: CLIENT_ID,
  //         discoveryDocs: DISCOVERY_DOCS,
  //         scope: SCOPES,
  //       })
  //       .then(
  //         function () {
  //           gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  //           updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //         },
  //         function (error) {
  //           console.log("error", error);
  //         }
  //       );
  // };

  // useEffect(() => {
  //   gapi.load("client:auth2", initClient);
  // }, []);

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
