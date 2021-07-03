import React, { Component, Fragment } from "react";
import Header from "./../../Components/AdminPage/Admin/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./../../Components/AdminPage/Admin/Home/Home";
import AddProducts from "./../../Components/AdminPage/Admin/AddProducts/AddProducts";

class AdminPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.showContentMenus(routes)}
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

const routes = [
  {
    path: "/admin/add-products",
    exact: false,
    main: () => <AddProducts />,
  },
  {
    path: "/admin",
    exact: false,
    main: () => <Home />,
  },
];

export default AdminPage;
