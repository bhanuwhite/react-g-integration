import React from 'react';
import $ from "jquery";
import toggleMenuImg from "../images/toggle-menu.png";
import homeImg from "../images/home.png";
import downloadImg from "../images/download.png";
import votingImg from "../images/voting.png";
import loginImg from "../images/login.png";
import settingImg from "../images/setting.png";

const SideMenu = () => {
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
              <ul className="navbar-nav menu">
                <li>
                  <a href="#" className="active d-flex">
                    <img
                      src={homeImg}
                      alt="Home"
                      className="nav-icons"
                    />
                    <span className="nav-text">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <img
                      src={downloadImg}
                      alt="Users"
                      className="nav-icons"
                    />{" "}
                    <span className="nav-text">Users</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <img
                      src={votingImg}
                      alt="register"
                      className="nav-icons"
                    />
                    <span className="nav-text">Register</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <img
                      src={loginImg}
                      alt="login"
                      className="nav-icons"
                    />{" "}
                    <span className="nav-text">Login</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-flex"
                    onClick={() => {
                      $(".setting-page").show(300);
                      $(".home-content").hide();
                    }}
                  >
                    <img
                      src={settingImg}
                      alt="setting"
                      className="nav-icons"
                    />
                    <span className="nav-text">Setting</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="d-flex">
                    <img
                      src={settingImg}
                      alt="setting"
                      className="nav-icons"
                    />
                    <span className="nav-text">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        </>
    )
}

export default SideMenu;
