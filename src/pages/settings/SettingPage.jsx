import React from "react";
import TwitterLogin from "../../accounts/TwitterLogin";
import DriveLogin from "../../accounts/DriveLogin";
import SideMenu from "../../components/sidemenu/SideMenu";
import Header from "../../components/header/Header";

const {REACT_APP_GITHUB_CLIENT_ID,REACT_APP_GITHUB_Redirect_URL} = process.env
const SettingPage = () => {
const path = "/";
  return (
    <>
      <div className="main-wrapper">
        <SideMenu />
        <div className="content-wrapper">
          <Header />
          <div className="setting-page">
            <div className="seeting-heading p-2">
              <h3>Setting</h3>
              <hr />
            </div>
            <div className="container-fluid">
              <div className="heading-inner ml-3">
                {/* <h4 className="">Add social media Account</h4> */}
              </div>
              <div className="row">
                <div className="col-xl-4">
                  <div className="social-media-button">
                    <div className="col">
                      <DriveLogin />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="social-media-button">
                    <div className="col">
                      <button type="button" className="btn btn-info">
                        <a
                          href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_GITHUB_Redirect_URL}?path=${path}&scope=user:email`}
                        >
                          LOGIN WITH GITHUB
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="social-media-button">
                    <div className="col">
                      <TwitterLogin />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;


                                          
       
                          
     
                                   