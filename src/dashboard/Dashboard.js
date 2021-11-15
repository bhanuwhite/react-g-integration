import React from "react";
import "./Dashboard.css";
import $ from "jquery";
import GoogleLogin from "react-google-login";

const Dashboard = () => {
  return (
    <>
      <div class="main-wrapper">
        <div class="side-menu">
          <div class="toggle-button">
            <img
              src="images/toggle-menu.png"
              alt="toggle"
              class="toggle-menu"
              onClick={() => {
                $(".side-menu").toggleClass("expanded");
                $(".content-wrapper").toggleClass("expanded");
              }}
            />
          </div>
          <nav class="navbar navbar-expand-md">
            <button
              class="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav menu">
                <li>
                  <a href="#" class="active d-flex">
                    <img src="images/homes.png" alt="Home" class="nav-icons" />
                    <span class="nav-text">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <img
                      src="images/download.png"
                      alt="Users"
                      class="nav-icons"
                    />{" "}
                    <span class="nav-text">Users</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <img
                      src="images/registers.png"
                      alt="register"
                      class="nav-icons"
                    />
                    <span class="nav-text">Register</span>
                  </a>
                </li>
                <li>
                  <a href="" class="d-flex">
                    <img
                      src="images/loginn.png"
                      alt="login"
                      class="nav-icons"
                    />{" "}
                    <span class="nav-text">Login</span>
                  </a>
                </li>
                <li>
                  <a href="" class="d-flex">
                    <img src="images/s.png" alt="setting" class="nav-icons" />
                    <span class="nav-text">Setting</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="content-wrapper">
          <header>
            <div class="header-wrapper">
              <div class="row no-gutters">
                <div class="col-md-6 col-lg-6 col-6">
                  <div class="search-box">
                    <div class="form-group">
                      <span class="form-control-feedback">
                        <img src="images/search.png" alt="search icon" />
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-6 text-right">
                  <div class="user-action">
                    <button type="button" class="btn btn-primary">
                      Add account +
                    </button>
                    <div class="user-image">
                      <img src="images/user-profile.png" alt="user" />
                    </div>
                    <a href="">
                      <img
                        src="images/user-option.png"
                        alt="options"
                        class="user-options"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <div class="mt-3">
              <button type="button" class="btn btn-primary">
                Add Account +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
