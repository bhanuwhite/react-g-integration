/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"; 

import LoginUi from "./pages/login/LoginUi";
import SignupUi from "./pages/signup/SignupUi";
import Dashboard from "./pages/dashboard/Dashboard";
import TwitterApi from "./TwitterApi/TwitterAuth";
import EditProfile from "./components/header/EditProfile";
import ViewProfile from "./components/header/ViewProfile";
import SettingPage from "./pages/settings/SettingPage";
import { ContextProvider } from "./context";
import Practise from "./Practise";
import GitHubLogin from "./GithubApi/GithubLogin";
const { REACT_APP_GOOGLE_DRIVE_CLIENT_ID, REACT_APP_GOOGLE_DRIVE_API_KEY } =
  process.env;

const Routes = () => {
  const token = localStorage.getItem("token");
  console.log(token,"token...")
  const [tokenData, setTokenData] = useState(localStorage);

  
  const eventListenerFun = () => {
    setTokenData({ ...localStorage });
  };

  useEffect(() => {
    window.addEventListener("storage", eventListenerFun);
  }, []);



  const PrivateRoutes = ({ children, ...rest }) => {

    return (
      <Route
        {...rest}
        render={({ location }) =>
          token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  const checkIsSignedIn = () => {
    if (token) {
      return "/dashboard";
    } else {
      return "/login";
    }
  };

  useEffect(() => {
    if (window.location.pathname === "login" && checkIsSignedIn()) {
      window.location.href = "/dashboard";
    }
  }, [window.location]);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginUi} />
        <Route path="/signup" component={SignupUi} />
        <PrivateRoutes path="/dashboard" component={Dashboard} />
        <PrivateRoutes path="/settings" component={SettingPage} />
        <Route path="/twitterapi" component={TwitterApi} />
        <Route path="/practise" component={Practise} />
        <Route path="/githublogin" component={GitHubLogin} />
        {/* <Route path="/editprofile" component={EditProfile} /> */}
        {/* <Route path="/viewprofile" component={ViewProfile} />  */}
        <Redirect
          exact
          from="/"
          to={localStorage.getItem("token") ? "/dashboard" : "/login"}
        />
      </Switch>
    </Router>
  );
};
export default Routes;
