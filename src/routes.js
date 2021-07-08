import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignPage from "./Pages/LoginPage/SignPage";
import GraphicsCards from "./Pages/StorePage/GraphicsCards";
import FinishRegister from "./Pages/LoginPage/FinishRegister";
import AdminPage from "./Pages/AdminPage/AdminPage";
import LoginAdminPage from "./Pages/AdminPage/LoginPage";
import RegisterAdmin from "./Pages/AdminPage/RegisPage";
import AvatarPage from "./Pages/AdminPage/AvatarPage";
import { Redirect } from "react-router-dom";

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
    main: () =>
      localStorage.getItem("user") ? (
        <AdminPage />
      ) : (
        <Redirect to="/login-admin" />
      ),
  },
  {
    path: "/choose-avatar",
    exact: false,
    main: ({ match }) =>
      localStorage.getItem("uid") ? (
        <AvatarPage match={match} />
      ) : (
        <Redirect to="/login-admin" />
      ),
  },
  {
    path: "/login-admin",
    exact: false,
    main: () => <LoginAdminPage />,
  },
  {
    path: "/register-admin",
    exact: false,
    main: ({ history }) => <RegisterAdmin history={history} />,
  },
  {
    path: "/global/login",
    exact: false,
    main: ({ match, history }) => <LoginPage match={match} history={history} />,
  },
  {
    path: "/global/register",
    exact: true,
    main: ({ match, history }) => <SignPage match={match} history={history} />,
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
