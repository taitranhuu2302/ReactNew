import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./../../Components/AdminPage/Header";
import Home from "./../../Components/AdminPage/Admin/Home";
import Profile from "./../../Components/AdminPage/Admin/Profile";
import Footer from "./../../Components/AdminPage/Footer";

class AdminPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.showContentMenus(routes)}
        <Footer />
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
  // {
  //   path: "/admin/add-products",
  //   exact: false,
  //   main: ({ match, history }) => <Functions match={match} history={history} />,
  // },
  // {
  //   path: "/admin/:id/edit-product",
  //   exact: false,
  //   main: ({ match, history }) => <Functions match={match} history={history} />,
  // },
  // {
  //   path: "/admin/users",
  //   exact: false,
  //   main: () => <Users />,
  // },
  // {
  //   path: "/admin/hightcharts",
  //   exact: false,
  //   main: () => <HightChartsPage />,
  // },
  {
    path: "/admin",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/admin/profile",
    exact: false,
    main: () => <Profile />,
  },
];

export default AdminPage;
