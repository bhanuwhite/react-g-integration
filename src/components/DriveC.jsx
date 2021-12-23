/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import driveImg from "../images/google-drive.png";

const DriveC = ({setShow, show}) => {
 
    const userInfo = {
        name:'ubed',
        email: 'user@example.com',
    }

    const handleAuthClick = () => {
        
    }



    
  return (
    <>
      <h3>Drives</h3>

      <div className="row">
        <div className="col-md-6 col-xl-4">
          <div className="card mb-3 widget-content p-3">
            <div className="d-flex justify-content-end">
              <a href="#">
                <button className="close">&times;</button>
              </a>
            </div>
            <div className="content-outer d-flex">
              <div className="tweet-name">
                <h3> {userInfo.name}</h3>
              </div>
              <span className="ml-2"> {userInfo.email}</span>
            </div>
            <div className="icon">
              <img                   
                src={driveImg}
                alt=""
                className="img-fluid drive-image"      
              />
            </div>          
            <div className="cardDivider my-3"></div>
            <div className="d-flex justify-content-between">  
              <div className="drive">
                <i className="fa fa-file-o" aria-hidden="true"></i>
                <span className="ml-2" >my files</span>   
              </div>             
              <div className="drive">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <span className="ml-2"  onClick={() => setShow({...show, show:true, flag:'image/jpeg'})}>my images</span>
              </div>
            </div>                                      

            <div className="d-flex justify-content-between mt-2">
              <div className="drive">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                <span className="ml-2"  onClick={() => setShow({...show, show:true, flag:'application/pdf'})}>Docs.pdf</span>
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
                onClick={handleAuthClick}                
              >
                Open Drive
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default DriveC;
