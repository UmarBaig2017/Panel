import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import routes, { notAuthenticatedRoutes } from "./routes";
import withTracker from "./withTracker";
import Store from "./flux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Signin from "./views/Signin";
import BasicDetailsSTP from "./views/BasicDetailsSTP";
import Signup from "./views/Signup";
class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Details" component={BasicDetailsSTP} />
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}
App.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default App;
