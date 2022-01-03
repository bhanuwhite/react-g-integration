import React, { useState, useEffect } from "react";
import githubIMG from "../images/github.png";
import "../dashboard/Dashboard.css";
import axios from "axios";
import _ from "lodash";
import { Button } from "react-bootstrap";

const Github = () => {
  const GITHUB_CLIENT_ID = "3d9a62acdac2de76bcb7";
  const gitHubRedirectURL = "http://localhost:4000/api/auth/github";
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

  return (
    <div>
      <h3>Github</h3>
      <div className="row">
        <div className="col-xl-6">
          {" "}
          <div className="git-details p-3">
            <div>
              <div className="App"></div>
              <div className="d-flex  justify-content-between">
                <div className="user-name">
                  <h4> {user.name}</h4>
                  <span>{user.login}</span>
                </div>
                <div className="git-image">
                  <img src={githubIMG} alt="" />
                </div>
              </div>
              <div className="cardDivider my-3"></div>
              <div className="gitrepo">
                <h5 className="border-bottom-2 mb-4">Repositories :</h5>
                <div className="repo-name">
                  <ol>
                    {_.map(_.take(Repo, 4), (e, idx) => (
                      <li>
                        {idx + 1}-{e.name}
                      </li>
                    ))}
                  </ol>
                </div>
                <button type="button" className="btn btn-success mt-3" id="#">
                  <a href={`https://github.com/${user.login}?tab=repositories`}>
                    {" "}
                    Open Github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;












                                          

                                                
                              

      