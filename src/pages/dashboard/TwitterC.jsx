/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useContext} from 'react'
import twitterImg from "../../images/twitter.png";
import { ContextProvider } from "../../context";
import DriveC from './DriveC';
import { useState } from "react";
const TwitterC = ({ setShow, show }) => {
  // const [show, setShow] = useState({
  //   show: false,
  //   flag: "",
  // });
  return (
    <>
      <h3 className='pb-3'>Your Activity</h3>
      <div className="row">


        <div className="col-md-6 col-xl-6">
          <div className="card mb-3 widget-content p-3">
            <div className="content-outer d-flex justify-content-between">
              <div className="tweet-name">
                <h3> Robart Ray </h3>
                <span>@usrname</span>
              </div>
              <div className="mt-1">
                <img
                  src={twitterImg}
                  alt=""
                  className="tweeter-image"
                />
              </div>
            </div>
            <div className="cardDivider my-3"></div>
            <div className="d-flex justify-content-start">

              <div className="tweet-description ml-4">
                <p>
                  {" "}
                  The pain itself is a lot more interesting. She takes
                  it at the very least and flees to be rejected By the
                  right of the system to soothe and not to pardon, we
                  accuse the wise man of choosing the distinction which
                  repels him! Here they provide us with nothing and
                  labor.{" "}
                </p>
              </div>
            </div>
            <div className="button-tweet ml-auto">
              <button type="button" className="btn btn-primary" id="#">
                Read More
              </button>
            </div>
          </div>
        </div>

        <DriveC setShow={setShow} show={show} />
        

      </div>
    </>
  )
}

export default TwitterC








