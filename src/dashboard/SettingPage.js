import React from "react";
import TwitterLogin from "../AccountsLogin/TwitterLogin";
import DriveLogin from "../AccountsLogin/DriveLogin";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

const SettingPage = () => {





  return (
    <>
      <div className="main-wrapper">
        <SideMenu />
        <div className="content-wrapper">
          <Header />
          <div className="setting-page">
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
                      <DriveLogin />
                    </div>                                         
                  </div>      
                </div>     
                <div className="col-xl-6">              
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
