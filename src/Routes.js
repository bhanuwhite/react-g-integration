/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginUi from "./auth/LoginUi";
import SignupUi from "./auth/SignupUi";
import Dashboard from './dashboard/Dashboard';
import GithubApi from "./GithubApi/GithubApi";
import TwitterApi from "./TwitterApi/TwitterAuth";
import EditProfile from "./dashboard/EditProfile";
import ViewProfile from "./dashboard/ViewProfile";
import SettingPage from "./dashboard/SettingPage";

const Routes = () => {
  const token = localStorage.getItem("token")
  const PrivateRoutes = ({children, ...rest}) => {
   
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
  }

  const checkIsSignedIn = () => {      
      if(token) {
        return "/dashboard"
      }else{
        return "/login"
      }
  }

  useEffect(() => {
   if(window.location.pathname === 'login' && checkIsSignedIn()){
     window.location.href = '/dashboard'
   }
  }, [window.location])

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginUi} />
        <Route path="/signup" component={SignupUi} />
        <PrivateRoutes path="/dashboard" component={Dashboard}/>
        <PrivateRoutes path="/settings" component={SettingPage}/>
        <Route path="/githubapi" component={GithubApi} />
        <Route path="/twitterapi" component={TwitterApi} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/viewprofile" component={ViewProfile} />
        <Redirect exact from ="/" to={localStorage.getItem('token' ) ? "/dashboard" : "/login"} />
      </Switch>
    </Router>
  );
};
export default Routes;