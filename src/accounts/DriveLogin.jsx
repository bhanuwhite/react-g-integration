/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from "react";
import { gapi } from "gapi-script";
import _ from "lodash";

import { ContextProvider } from "../context";

const { REACT_APP_GOOGLE_DRIVE_CLIENT_ID, REACT_APP_GOOGLE_DRIVE_API_KEY } =
  process.env;
const DriveLogin = () => {
  // const [driveFiles, setDriveFiles] = useState({
  //   data: []
  // });
  const { state, setState } = useContext(ContextProvider);

  // const { name, email } = JSON.parse(
  //   localStorage.getItem("driveLoginUserInfo")
  //);

  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  ];

  // const [documents, setDocuments] = useState([]);

  const  listFiles = (searchTerm = null) => {
  setState({
    ...state,
  
    loading:true
  });
    gapi.client.drive.files
      .list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
        q: searchTerm,
      })
      .then(function (response) {
        const res = JSON.parse(response.body);
        // setDriveFiles({...driveFiles,driveFiles:res.files})
        if (JSON.stringify(state.files) !== JSON.stringify(res.files)) {
          localStorage.setItem(
            "driveLoginUserInfo",
            JSON.stringify({
              email: _.get(
                gapi.auth2.getAuthInstance(),
                "currentUser.le.wt.cu",
                ""
              ),
              name: _.get(
                gapi.auth2.getAuthInstance(),
                "currentUser.le.wt.Ad",
                ""
              ),
            })
          );
         

          setState({
            ...state,
            files: res.files,
            name: _.get(
              gapi.auth2.getAuthInstance(),
              "currentUser.le.wt.Ad",
              ""
            ),
            email: _.get(
              gapi.auth2.getAuthInstance(),
              "currentUser.le.wt.cu",
              ""
            ),
            loading:false
          });
        }
      }).catch((err) => {
        setState({...state, loading: false})
      })
  };
  const handleAuthClick = (status) => {
    if (status) {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then((res) => {
          console.log(res, "res");
        })
        .catch((err) => console.log(err, "err"));
    } else {
      gapi.auth2
        .getAuthInstance()
        .signOut()
        .then((res) => {
          JSON.parse(localStorage.removeItem("driveLoginUserInfo,signedIn"));
        })
        .catch((err) => console.log(err, "err"));
    }
  };

  const [isSignedIn, setIsSignedIn] = useState(
    JSON.parse(localStorage.getItem("signedIn"))
  );

  const updateSigninStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
    localStorage.setItem("signedIn", JSON.stringify(isSignedIn));
    if (isSignedIn) {
      listFiles();
    } else {
      setState({ ...state, files: [], email: "", name: "",loading:false });
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
    gapi.load("client:auth2", () => initClient());
  }, []);
console.log(state,"state");

  return (<>
  <div>
  </div>
    <div>
      {isSignedIn ? (
        <button
          className="btn btn-danger"
          onClick={() => handleAuthClick(false)}
        >
          LogOut
        </button>
      ) : (
        <button className="btn btn-info" onClick={() => handleAuthClick(true)}>
          Login with google
        </button>
      )}
    </div>
  </>
  
  );
};

export default DriveLogin;
