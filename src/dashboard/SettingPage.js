import React from 'react'

const SettingPage = () => {
    return (
        <>
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
          </div> 
        </>
    )
}

export default SettingPage;
