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
import GoogleAouth from "./GoogleDriveApi/GoogleAouth"
import TwitterApi from "./TwitterApi/TwitterAouth";
import UpdateDetails from "./UpdateDetails";
import EditProfile from "./dashboard/EditProfile";
import viewProfile from "./dashboard/viewProfile";

const Routes = () => {
  const token = localStorage.getItem("token")
  const PrivateRoutes = ({children, ...rest}) => {
    console.log(localStorage.getItem("token"))
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
        <Route path="/driveApi" component={GoogleAouth} />
        <Route path="/githubapi" component={GithubApi} />
        <Route path="/updatedetails" component={UpdateDetails} />
        <Route path="/twitterapi" component={TwitterApi} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/viewprofile" component={viewProfile} />
        <Redirect exact from ="/" to={checkIsSignedIn()} />
      </Switch>
    </Router>
  );
};
export default Routes;