import React, { Component, Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HeaderPage from "./Pages/HeaderPage";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <HeaderPage />
          <div className="container-fluid p-0">
            <div className="row">{this.showContentMenus(routes)}</div>
          </div>
        </Router>
      </Fragment>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };
}

export default App;
