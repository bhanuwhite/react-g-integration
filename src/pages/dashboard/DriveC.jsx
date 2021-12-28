/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { ContextProvider } from "../../context";
import driveImg from "../../images/google-drive.png";
import _ from "lodash";

const DriveC = ({ setShow, show }) => {
  const { state } = useContext(ContextProvider);

  const handleAuthClick = (filesLength) => {
    if(filesLength){

      window.location.href = "https://drive.google.com/drive/my-drive";
    }else{

      console.log("error")
    }
  };


  // const { name, email } = JSON.parse(
  //   localStorage.getItem("driveLoginUserInfo")
  // );

  return (
    <>
    

      
        <div className="col-md-6 col-xl-6">
          <div className="card mb-3 widget-content p-3">      
            <div className="content-outer d-flex justify-content-between">
              <div className="tweet-name">
                <h3> {state.name}</h3>
                <span className="">{state.email}</span>
                </div>
             
              <div className="icon">
              <img                                
                src={driveImg}          
                alt=""
                className="img-fluid drive-image"      
              />
            </div>      
            </div>      
                       
            <div className="cardDivider my-3"></div>
            <div className="d-flex justify-content-between">  
              <div className="drive">
                <i className="fa fa-file-o" aria-hidden="true"></i>                     
                <span
                  className="ml-2"
                  onClick={() => setShow({ ...show, show: true, flag: "" })}
                >
                  my files
                </span>
              </div>                  
              <div className="drive">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <span
                  className="ml-2"
                  onClick={() =>
                    setShow({ ...show, show: true, flag: "image/jpeg" })
                  }
                >
                  my images
                </span>
              </div>
            </div>                                      

            <div className="d-flex justify-content-between mt-2">
              <div className="drive">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                <span
                  className="ml-2"
                  onClick={() => 
                    setShow({ ...show, show: true, flag: "application/pdf" })
                  }
                >
                  Docs.pdf
                </span>
              </div>
              {/* <div className="drive">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <span className="ml-2">my images</span>
              </div> */}                                        
            </div>              

            <div className="button-tweet mt-4">
              <button
                type="button"                     
                className="btn btn-primary"
                id="#"
                onClick={() => handleAuthClick(state.files.length)}
              >
                Open Drive
              </button>
            </div>
          </div>
        </div>
        
        
      
    </>
  );
};

export default DriveC;
