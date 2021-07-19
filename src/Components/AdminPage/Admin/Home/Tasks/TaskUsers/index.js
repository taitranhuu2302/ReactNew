import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import * as actions from "./../../../../../../Actions";

export default function TaskUsers() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const now = new moment();
  now.locale("en-au");
  const dateNow = now.format("L");
  console.log(now.format("L"));
  console.log(dateNow);
  console.log(moment("8/19/2021").isSame(now));
  useEffect(() => {
    dispatch(actions.acGetUsersRequest());
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.date}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
