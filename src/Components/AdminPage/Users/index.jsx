import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import * as actions from "../../../Actions";
import User from "./User";

const Index = () => {
  const dispatch = useDispatch();
  const userAdmin = useSelector((state) => state.usersAdmin);
  const userCustomer = useSelector((state) => state.users);
  const [sort, setSort] = useState("");
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    dispatch(actions.acGetUserAdminRequest());
    dispatch(actions.acGetUsersRequest());
  }, []);

  useEffect(() => {
    setNewList(userAdmin.concat(userCustomer));
    return () => {
      setNewList(userAdmin.concat(userCustomer));
    };
  }, [userAdmin, userCustomer]);

  var listUsers = (users) => {
    return users.map((user, index) => {
      return (
        <User
          user={user}
          key={index}
          removeAccount={removeAccount}
          index={index + 1}
          onSave={onSave}
        />
      );
    });
  };

  const onSave = (user) => {
    if (user.role === "admin") {
      dispatch(actions.acUpdateUserAdminRequest(user));
    } else {
      dispatch(actions.acUpdateUserRequest(user));
    }
  };

  const removeAccount = (id, role) => {
    if (role === "admin") {
      dispatch(actions.DeleteUserAdminRequest(id));
      return;
    } else {
      dispatch(actions.DeleteUserRequest(id));
      return;
    }
  };

  if (sort === "AZ") {
    newList.sort((a, b) => {
      if (a.email < b.email) return -1;
      if (a.email > b.email) return 1;
      return 0;
    });
  }
  if (sort === "ZA") {
    newList.sort((a, b) => {
      if (a.email > b.email) return -1;
      if (a.email < b.email) return 1;
      return 0;
    });
  }

  return (
    <div className="container-fluid mt-5" id="manager-users">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="font-ubun">Manager Users</h3>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>
                    <span>Email</span>
                    <button
                      onClick={() => setSort("ZA")}
                      className="btn shadow-none fas fa-sort-alpha-up"
                    />

                    <button
                      onClick={() => setSort("AZ")}
                      className="btn shadow-none fas fa-sort-alpha-down"
                    />
                  </th>
                  <th colSpan="2">Password</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{listUsers(newList)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
