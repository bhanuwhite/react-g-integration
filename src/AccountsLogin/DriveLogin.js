import React, { useState, useEffect,useContext } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import _ from 'lodash';

import {ContextProvider} from "../context" 




const { REACT_APP_GOOGLE_DRIVE_CLIENT_ID, REACT_APP_GOOGLE_DRIVE_API_KEY } = process.env;
const DriveLogin = () => {
const {state, setState} = useContext(ContextProvider)
  const [userInfo, setUserInfo] = useState()
  // const responseGoogle = (response) => {
  //   console.log(response, "GOOGLEresponse");
  // };

  // const errGoogle = (err) => {
  //   console.log(err, "something went wrong");
  // };


  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  ];

  const [documents, setDocuments] = useState([]);

  const listFiles = (searchTerm = null) => {

    console.log(gapi.client.drive.files)
    gapi.client.drive.files
      .list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
        q: searchTerm,
      })
      .then(function (response) {
        const res = JSON.parse(response.body);
        console.log(res.files)
        setState({...state, files:res.files})

        // setDocuments([...documents, res.files]);
      });
  };
  
  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const updateSigninStatus = (isSignedIn) => {
    console.log( _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.cu", ""))
    setUserInfo({
      ...userInfo,
      email: _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.cu", ""),
      name: _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.Ad", ""),
    });

    if (isSignedIn) {
      gapi.client.drive.files
        .list({
          pageSize: 10,
          fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
          q: undefined,
        })
        .then(function (response) {
          const res = JSON.parse(response.body);
          setDocuments(res.files);
        })
        .catch((err) => {
          console.log(err, "err");
        });

      listFiles();
    } else {
      // prompt user to sign in
      // handleAuthClick();
    }
  };

  const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
  const API_KEY = REACT_APP_GOOGLE_DRIVE_API_KEY;
  const CLIENT_ID = REACT_APP_GOOGLE_DRIVE_CLIENT_ID;

  const initClient = () => {
    gapi &&
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(
          function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          },
          function (error) {
            console.log("error", error);
          }
        );
  };

  useEffect(() => {
    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <div>

      <button className="btn btn-info" onClick={handleAuthClick}>Login with google</button>
      {/* <GoogleLogin
        clientId={REACT_APP_GOOGLE_DRIVE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={errGoogle}
        cookiePolicy="single_host_origin"
      /> */}
    </div>
  );
};

export default DriveLogin;
