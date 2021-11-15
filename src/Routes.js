import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginUi from "./auth/LoginUi";
import SignupUi from "./auth/SignupUi";
import Dashboard from './dashboard/Dashboard'
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginUi} />
        <Route path="/signup" component={SignupUi} />
        <Route path="/dashboard" component={Dashboard}/>
        <Redirect exact from ="/" to="/login" />
      </Switch>
    </Router>
  );
};
export default Routes;