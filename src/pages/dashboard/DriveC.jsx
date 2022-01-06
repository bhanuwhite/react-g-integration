/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { ContextProvider } from "../../context";
import driveImg from "../../images/google-drive.png";
import twitterImg from "../../images/twitter.png";
import _ from "lodash";
import TwitterC from "./TwitterC";
import DriveLogin from "../../accounts/DriveLogin";

const DriveC = ({ setShow, show }) => {
  const { state } = useContext(ContextProvider);

  const handleAuthClick = (filesLength) => {
    if (filesLength) {
      window.location.href = "https://drive.google.com/drive/my-drive";
    } else {
      console.log("error");
    }
  };

  const DriveSignInStatus = JSON.parse(
    localStorage.getItem("driveLoginUserInfo")
  );

  console.log(state.loading, "drive files load");
  return (
    <>
      <div className="col-md-6 col-xl-6">
        <div className="card mb-3 widget-content p-3">
          <div>
            <div className="content-outer d-flex justify-content-between">
              {!state.email ? (
                <div className="tweet-name">
                  <h3> DRIVE NAME</h3>
                  <span className="DriveUser">DRIVE EMAIL</span>
                </div>
              ) : (
                <div className="tweet-name">
                  <h3> {state.name}</h3>
                  <span className="DriveUser">{state.email}</span>
                </div>
              )}
              <div className="icon">
                <img src={driveImg} alt="" className="img-fluid drive-image" />
              </div>
            </div>

            <div className="cardDivider my-3"></div>

            {DriveSignInStatus?.email ? (
              <>
                {" "}
                {state.loading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {!state?.email ? (
                      <h3 className="text-center mt-5"> LOGIN TO VIEW THE FILES </h3>
                    ) : (
                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="drive">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                            <span
                              className="ml-2"
                              onClick={() =>
                                setShow({ ...show, show: true, flag: "" })
                              }
                            >
                              my files
                            </span>
                          </div>
                          <div className="drive">
                            <i className="fa fa-folder" aria-hidden="true"></i>
                            <span
                              className="ml-2"
                              onClick={() =>
                                setShow({
                                  ...show,
                                  show: true,
                                  flag: "image/jpeg",
                                })
                              }
                            >
                              my images
                            </span>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                          <div className="drive">
                            <i
                              className="fa fa-file-pdf-o"
                              aria-hidden="true"
                            ></i>
                            <span
                              className="ml-2"
                              onClick={() =>
                                setShow({
                                  ...show,
                                  show: true,
                                  flag: "application/pdf",
                                })
                              }
                            >
                              Docs.pdf
                            </span>
                          </div>
                        </div>
                        {/* <div className="button-tweet mt-4">
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="#"
                        onClick={() => handleAuthClick(state.files.length)}
                      >
                        Open Drive
                      </button>
                    </div> */}
                      </div>
                    )}
                  </>
                )}
              </>
            ) : (
              <h3 className="text-center"> LOGIN TO VIEW THE FILES </h3>
            )}
          </div>
          
          <div className="d-flex  justify-content-between drive-buttons">
         
              <button
                type="button"
                className="btn btn-primary"
                id="#"
                onClick={() => handleAuthClick(state.files.length)}
              >
                Open Drive
              </button>
              
              <DriveLogin/>
              
             
           
          </div>
        </div>
      </div>
    </>
  );
};

export default DriveC;
