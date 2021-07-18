import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../../../../../../Actions";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Fab,
  Box,
  Tooltip,
  Collapse,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TableTaskItem from "./TableTaskItem";

export default function TableTask() {
  const [open, setOpen] = useState(false);
  const [keyAdd, setKeyAdd] = useState("");
  const works = useSelector((state) => state.works);
  const dispatch = useDispatch();

  const date = new Date();
  const getDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const getTime = `${date.getHours()}:${date.getMinutes()} ${
    date.getHours() < 12 ? "AM" : "PM"
  }`;

  const dateTime = `${getTime}, ${getDate}`;

  useEffect(() => {
    dispatch(actions.getWorkRequest());
  }, []);

  const addWork = () => {
    var workObj = {
      work: keyAdd,
      role: "Doing",
      date: dateTime,
    };
    if (!workObj.work) {
      return;
    }
    dispatch(actions.addWorkRequest(workObj));
    setKeyAdd("");
  };

  const deleteWork = (id) => {
    dispatch(actions.deleteWorkRequest(id));
  };

  const onCheck = (e, work) => {
    var check = e.target.checked;
    var workNew = {};
    if (check) {
      workNew = {
        id: work.id,
        work: work.work,
        role: "Done",
        date: work.date,
      };
      dispatch(actions.updateWorkRequest(workNew));
    } else {
      workNew = {
        id: work.id,
        work: work.work,
        role: "Doing",
        date: work.date,
      };
      dispatch(actions.updateWorkRequest(workNew));
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <Collapse timeout="auto" unmountOnExit in={open}>
                <FormControl variant="standard" className="w-100">
                  <InputLabel>Add Work</InputLabel>
                  <Input
                    type="text"
                    value={keyAdd}
                    className="w-100"
                    onChange={(e) => setKeyAdd(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button onClick={() => addWork()}>
                          <AddIcon />
                        </Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {works.map((work, index) => {
            return (
              <TableTaskItem
                key={index}
                onCheck={onCheck}
                work={work}
                deleteWork={deleteWork}
              />
            );
          })}
        </TableBody>
      </Table>
      <Tooltip title="Add" placement="top">
        <Fab
          color="secondary"
          onClick={() => setOpen(!open)}
          sx={{ position: "absolute", top: "-65px", right: "10px" }}
          className="button-add"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
