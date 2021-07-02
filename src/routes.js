import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignPage from "./Pages/LoginPage/SignPage";
import GraphicsCards from "./Pages/StorePage/GraphicsCards";
import FinishRegister from "./Pages/LoginPage/FinishRegister";
import AdminPage from "./Pages/AdminPage/AdminPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <HomePage history={history} />,
  },
  {
    path: "/GraphicsCard",
    exact: false,
    main: () => <GraphicsCards />,
  },
  {
    path: "/admin",
    exact: false,
    main: () => <AdminPage />,
  },
  {
    path: "/global/login",
    exact: false,
    main: ({ match, history }) => <LoginPage match={match} history={history} />,
  },
  {
    path: "/global/register",
    exact: true,
    main: ({ match, history, redirect }) => (
      <SignPage match={match} history={history} redirect={redirect} />
    ),
  },
  {
    path: "/global/register/complete",
    exact: false,
    main: ({ match, history }) => (
      <FinishRegister match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
