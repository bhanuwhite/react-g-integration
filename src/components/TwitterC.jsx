/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import twitterImg from "../images/twitter.png";
const TwitterC = () => {
    return (
        <>
              <h3>Tweets</h3>
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
                        <h3> Abhishek Pandey </h3>
                        <span>@usrname</span>
                      </div>
                    </div>
                    <div className="cardDivider my-3"></div>
                    <div className="d-flex justify-content-start">
                      <div className="mt-1">
                        <img
                          src={twitterImg}
                          alt=""
                          className="tweeter-image"
                        />
                      </div>
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

                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content p-3">
                    <div className="d-flex justify-content-end">
                      <a href="#">
                        <button className="close">&times;</button>
                      </a>
                    </div>
                    <div className="content-outer d-flex">
                      <div className="tweet-name">
                        <h3> Robart Ray </h3>
                        <span>@usrname</span>
                      </div>
                    </div>
                    <div className="cardDivider my-3"></div>
                    <div className="d-flex justify-content-start">
                      <div className="mt-1">
                        <img
                          src={twitterImg}
                          alt=""
                          className="tweeter-image"
                        />
                      </div>
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
              </div>
        </>
    )
}

export default TwitterC
