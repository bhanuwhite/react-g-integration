/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button } from "react-bootstrap";
import searchImg from "../../images/search.png";
import { useHistory } from "react-router-dom";
import ViewProfile from "./ViewProfile";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user-info");
    window.dispatchEvent(new Event("storage"));
    history.push("/");
  };
  return (
    <header className="d-flex align-items-center">
      <div className="header-wrapper">
        <div className="row no-gutters ">
          <div className="col-md-6 col-6 d-flex align-items-center">
            <div className="search-box">
              <div className="form-group position-relative">
                <span className="form-control-feedback position-absolute header-search-icon">
                  <img src={searchImg} alt="search icon" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>                                            
            </div>                                
          </div>
          <div className="col-md-6 col-6 text-right">
            <div className="user-action">
              <div>
                <Button
                  variant="danger"
                  className="mx-2"   
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
              <ViewProfile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
