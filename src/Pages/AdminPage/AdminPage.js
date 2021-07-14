import React, { Component, Fragment } from "react";
import Header from "./../../Components/AdminPage/Admin/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./../../Components/AdminPage/Admin/Home/Home";
import Functions from "../../Components/AdminPage/Admin/AddProducts/Functions";
import Users from "./../../Components/AdminPage/Users";
import HightChartsPage from "./HightChartsPage";

class AdminPage extends Component {
  render() {
    return (
      <Fragment>
        <Route render={({ match }) => <Header match={match} />} />
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
    main: ({ match, history }) => <Functions match={match} history={history} />,
  },
  {
    path: "/admin/:id/edit-product",
    exact: false,
    main: ({ match, history }) => <Functions match={match} history={history} />,
  },
  {
    path: "/admin/users",
    exact: false,
    main: () => <Users />,
  },
  {
    path: "/admin/hightcharts",
    exact: false,
    main: () => <HightChartsPage />,
  },
  {
    path: "/admin",
    exact: true,
    main: () => <Home />,
  },
];

export default AdminPage;
