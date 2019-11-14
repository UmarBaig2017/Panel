import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import routes, { notAuthenticatedRoutes } from "./routes";
import withTracker from "./withTracker";
import Store from "./flux/store"
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Signin from "./views/Signin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuth: Store.getloginstatus() };
  }
 
 componentWillMount() {
  
    this.setState({
      isAuth: Store.getloginstatus() 
    })
 
 }
  
  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {!this.state.isAuth &&
            notAuthenticatedRoutes.map((route, index) => {
              return (
                <React.Fragment key={index}>
                  <Route exact path={route.path} component={route.component} />
                </React.Fragment>
              );
            })}
          {this.state.isAuth &&
            routes.map((route, index) => {
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
        </div>
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
