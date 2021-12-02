/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $ from "jquery";
import toggleMenuImg from "../images/toggle-menu.png";
import homeImg from "../images/home.png";
import downloadImg from "../images/download.png";
import votingImg from "../images/voting.png";
import loginImg from "../images/login.png";
import settingImg from "../images/setting.png";
import LogoutImg from "../images/power-off.png";
import { useHistory, useLocation } from "react-router-dom";

const SideMenu = () => {
  const history = useHistory();

  const location = useLocation();

  const getPathExistedPath = (pathName) => pathName === location.pathname
  return (
    <>
      <div className="side-menu">
        <div className="toggle-button">
          <img
            src={toggleMenuImg}
            alt="toggle"
            className="toggle-menu"
            onClick={() => {
              $(".side-menu").toggleClass("expanded");
              $(".content-wrapper").toggleClass("expanded");
            }}
          />
        </div>
        <nav className="navbar navbar-expand-md">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav menu side-menu-list">
              <li
                id="home-button"
              >
                <a
                  className={getPathExistedPath("/dashboard") ? "active d-flex" : "d-flex"}
                  onClick={() => history.push("/dashboard")}
                >
                  <img src={homeImg} alt="Home" className="nav-icons" />
                  <span className="nav-text">Home</span>
                </a>
              </li>
              <li>
                <a  className="d-flex">
                  <img src={downloadImg} alt="Users" className="nav-icons" />{" "}
                  <span className="nav-text">Users</span>
                </a>
              </li>
              <li>
                <a  className="d-flex">
                  <img src={votingImg} alt="register" className="nav-icons" />
                  <span className="nav-text">Register</span>
                </a>
              </li>
              <li>
                <a  className="d-flex">
                  <img src={loginImg} alt="login" className="nav-icons" />{" "}
                  <span className="nav-text">Login</span>
                </a>
              </li>
              <li>
                <a
                  
                  className={getPathExistedPath("/settings") ? "active d-flex" : "d-flex"}
                  onClick={() => {
                    history.push("/settings");
                    // $(".setting-page").show(300);
                    // $(".home-content").hide();
                  }}
                >
                  <img src={settingImg} alt="setting" className="nav-icons" />
                  <span className="nav-text">Setting</span>
                </a>
              </li>

              <li>
                <a  className="d-flex">
                  <img src={LogoutImg} alt="setting" className="nav-icons" />
                  <span className="nav-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
