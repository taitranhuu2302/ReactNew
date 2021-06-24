import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import StorePage from "./Pages/StorePage/StorePage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/store",
    exact: false,
    main: () => <StorePage />,
  },
  {
    path: "/global",
    exact: false,
    main: ({ match }) => <LoginPage match={match} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
