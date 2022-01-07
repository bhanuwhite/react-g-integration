import React, { useState, useEffect } from "react";
import githubIMG from "../images/github.png";
import "../dashboard/Dashboard.css";
import axios from "axios";
import _ from "lodash";

import { Button } from "react-bootstrap";
import DriveC from "../pages/dashboard/DriveC";

const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_Redirect_URL } =
  process.env;

const GitHubComponent = ({ user, Repo }) => {
  return (
    <div className="col-xl-6">
      {" "}
      <div className="git-details p-3">
        <div>
          <div className="App"></div>
          <div className="d-flex  justify-content-between">
            {user.name ? (
              <>
                {" "}
                <div className="user-name">
                  <h3> {user.name}</h3>
                  <span className="GithubUser">{user.login}</span>
                </div>
                <div className="git-image">
                  <img src={githubIMG} alt="" />
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="user-name">
                  <h4> GITHUB NAME</h4>
                  <span>GITHUB LOGIN ID</span>
                </div>
                <div className="git-image">
                  <img src={githubIMG} alt="" />
                </div>
              </>
            )}
          </div>
          <div className="cardDivider my-3"></div>
          {user.name?<><div className="gitrepo">
            <h5 className="border-bottom-2 mb-2">Repositories :</h5>
            <div className="repo-name">
              <ol>
                {_.map(_.take(Repo, 4), (e, idx) => (
                  <li key={idx}>
                    {idx + 1}-{e.name}
                  </li>
                ))}
              </ol>
            </div>
            <div className="d-flex  justify-content-between">
              <button type="button" className="btn btn-success mt-2" id="#">
                <a href={`https://github.com/${user.login}?tab=repositories`}>
                  {" "}
                  Open Github
                </a>
              </button>
              {user.name?<button type="button" className=" btn btn-danger mt-2" id="#">
                logout
              </button>:null}
              
            </div>
          </div> </> : <div className="GithubUser"><h3 className="text-center ">LOGIN TO VIEW THE FILES</h3></div> }
          
        </div>
      </div>
    </div>
  );
};

const DriveComponent = ({ show, setShow }) => {
  return <DriveC setShow={setShow} show={show} />;
};

const Github = ({ setShow, show }) => {
  const path = "/";

  const [user, setUser] = useState("");
  const [Repo, setRepo] = useState([]);

  useEffect(() => {
    (async function () {
      const userDetail = await axios
        .get(`http://localhost:4000/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);

      console.log(userDetail, "userdetails");
      axios.get(`${userDetail.repos_url}`).then((response) => {
        console.log(response.data, "repo res");
        setRepo(response.data);
      });

      setUser(userDetail);
    })();
  }, []);

  return (<div>

<h3>Github</h3>
    <div className="row">
      <GitHubComponent user={user} Repo={Repo} />
  
      <DriveComponent setShow={setShow} show={show} />
      {/* <div className="col-xl-6">
          <h4>DRIVE</h4>
          <DriveC setShow={setShow} show={show} />
        </div> */}
    </div>
  </div>
    
  );
};

export default Github;
