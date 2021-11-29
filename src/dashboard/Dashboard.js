import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import $ from "jquery";
import { gapi } from "gapi-script";
import Header from '../components/Header'
import _ from "lodash";
import EditProfile from "./EditProfile";
import viewProfile from "./viewProfile";
import Main from "../components/Main";
import SideMenu from "../components/SideMenu";
import SettingPage from "./SettingPage";
import ViewProfile from "./viewProfile";
const { REACT_APP_GOOGLE_DRIVE_API_KEY, REACT_APP_GOOGLE_DRIVE_CLIENT_ID } =
  process.env;

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });
  /* DRIVE API STATES */
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  ];
  const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] =
    useState();
  const [documents, setDocuments] = useState([]);
  const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
  const [listDocumentsVisibility, setListDocumentsVisibility] = useState(false);

  const [signedInUser, setSignedInUser] = useState();
  const listFiles = (searchTerm = null) => {
    setIsFetchingGoogleDriveFiles(true);
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
        q: searchTerm,
      })
      .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        console.log(response, "response files");
        setDocuments([...documents, res.files]);
      });
  };
  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };

  console.log(gapi, "gapiauth");
  const updateSigninStatus = (isSignedIn) => {
    setUserInfo({
      ...userInfo,
      email: _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.cu", ""),
      name: _.get(gapi.auth2.getAuthInstance(), "currentUser.le.wt.Ad", ""),
    });

    console.log(isSignedIn, gapi.auth2.getAuthInstance());
    if (isSignedIn) {
      gapi.client.drive.files
        .list({
          pageSize: 10,
          fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
          q: undefined,
        })
        .then(function (response) {
          setIsFetchingGoogleDriveFiles(false);
          setListDocumentsVisibility(true);
          const res = JSON.parse(response.body);
          console.log(res, "response files");
          setDocuments(res.files);
        })
        .catch((err) => {
          console.log(err, "err");
        });

      console.log(gapi.auth2.getAuthInstance(), "userDetails");

      listFiles();
    } else {
      // prompt user to sign in
      handleAuthClick();
    }
  };

  const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
  const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
  const initClient = () => {
    console.log("init");
    gapi &&
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(
          function (res) {
            console.log("callres", res);

            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          },
          function (error) {
            console.log("error", error);
          }
        );
  };

  useEffect(() => {
    console.log(gapi);
    gapi.load("client:auth2", initClient);
  }, []);

  // console.log(_.get(gapi.auth2.getAuthInstance(),"currentUser.le.wt.Ad",""),"myview")
  console.log(documents, "resfilles");

  return (
    <>

      <div className="main-wrapper">
        <div className="model-fade">
          <div className="container">
          <ViewProfile />
            <div
              className="d-flex justify-content-start mt-1 cross-model"
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


        {
          /**
           * Side menu
           */
        }
      
  <SideMenu/>
        <div className="content-wrapper">
          <Header/>
          {/* <Main/> */}
          {/* <header>
            <div className="header-wrapper">
              <div className="row no-gutters">
                <div className="col-md-6 col-lg-6 col-sm-12 col-6">
                  <div className="search-box">
                    <div className="form-group">
                      <span className="form-control-feedback">
                        <img src="images/search.png" alt="search icon" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-6 col-sm-12 text-right">
                  <div className="user-action">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-danger dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        logout
                      </button>
                    </div>
                    <div className="btn-group">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/images/user-profile.png"
                          alt=""
                          className="user-img"
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
          </header> */}


       <Main/>

{/**
 * settings page
 */
}

          {/* <div className="setting-page">
            <div className="seeting-heading p-3">
              <h3>Setting</h3>
              <hr />
            </div>
            <div className="container-fluid">
              <div className="heading-inner ml-3">
                <h4 className="">Add social media Account</h4>
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="social-media-button">
                    <div className="col">
                      <a href="#" className="google btn1">
                        <i className="fa fa-google fa-fw"></i> Login with Drive
                      </a>

                      <a href="#" className="github btn1">
                        <i className="fa fa-github fa-fw"></i> Login with Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="social-media-button">
                    <div className="col">
                      <a href="#" className="twitter btn1">
                        <i className="fa fa-twitter fa-fw"></i> Login with
                        Twitter
                      </a>
                      <a href="#" className="google btn1">
                        <i className="fa fa-github fa-fw"></i> Login with Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  */}
          <SettingPage />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
