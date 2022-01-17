import React, { useState, useEffect } from "react";
import githubIMG from "../images/github.png";
import userImg from "../images/user.png";
import "../dashboard/Dashboard.css";
import axios from "axios";
import _ from "lodash";

import { Button } from "react-bootstrap";
import DriveC from "../pages/dashboard/DriveC";

const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_Redirect_URL } =
  process.env;
const path = "/";

const GithubLogin = ({ user, setUser }) => {
  

  // const handleLogout = () =>{

  //   setUser(initialState)
  // }
  console.log(user, "logout user");
  const handleSubmit = (status) => {
    if (status) {
      <button type="button" className="btn btn-success mt-2 ml-auto" id="#">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_GITHUB_Redirect_URL}?path=${path}&scope=user:email`}
        >
          LOGIN WITH GITHUB
        </a>
      </button>;
    } else {
      <button type="button" className="btn btn-success mt-2" id="#">
        LOGOUT
      </button>;
    }
  };
  return (
    <>
      {!user ? (
        <div className="d-flex justify-content-end githubLoginButton">
          <button
            type="button"
            className="btn btn-info button-84"
            onClick={() => {
              handleSubmit(true);
            }}
          >
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_GITHUB_Redirect_URL}?path=${path}&scope=user:email`}
              className="opengithubButton">
              LOGIN WITH GITHUB
            </a>
          </button>
        </div>
      ) : (
        <button
          type="button"
          className=" btn btn-danger mt-2 button-84L"
          id="#"
          onClick={() => {
            handleSubmit(false);
          }}
        >
          LOGOUT
        </button>
      )}
    </>
  );
};

const GitHubComponent = ({ user, Repo, setUser }) => {
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
          {user.name ? (
            <>
              <div className="gitrepo">
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
                  <button type="button" className="btn btn-success mt-2 button-84" >
                    <a 
                      href={`https://github.com/${user.login}?tab=repositories`} className="opengithubButton"
                      >
                      {" "}
                      Open Github
                    </a>
                  </button>
                  {/* <div>
                  <button
            type="button"
            className=" btn btn-danger mt-2"
            id="#">
           
          
            LOGOUT
          </button>
                  </div> */}
                  <GithubLogin user={user} />
                </div>
              </div>{" "}
            </>
          ) : (
            <div className="GithubUser">
              {" "}
              <div className="drive-before-login text-center d-flex justify-content-center">
                <img src={userImg} alt="user-img" className="user-imga" />
                <h3 className="text-center login-text ml-3 mt-2">
                  {" "}
                  LOGIN TO VIEW THE FILES{" "}
                </h3>
              </div>
              {/* <div>
                <button type="button" className="btn btn-success mt-2" id="#">
                  <a
                    href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_GITHUB_Redirect_URL}?path=${path}&scope=user:email`}
                  >
                    LOGIN WITH GITHUB
                  </a>
                </button>
       
              </div> */}
              <GithubLogin user={user} setUser={setUser} />
            </div>
          )}
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

  const initialState = {
    user: "",
    setUser: "",
  };

  const [user, setUser] = useState(initialState);
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
      console.log(userDetail, "current");
      setUser(userDetail);
    })();
  }, []);
  console.log(user, "githubuser");
  return (
    <div>
      <h3>Github</h3>
      <div className="row">
        <GitHubComponent user={user} Repo={Repo} setUser={setUser} />

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
