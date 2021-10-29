import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginUi from "./LoginUi";
import SignupUi from "./SignupUi";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginUi} />
        <Route path="/signup" component={SignupUi} />
        <Redirect exact from ="/" to="/login" />
      </Switch>
    </Router>
  );
};
export default Routes;