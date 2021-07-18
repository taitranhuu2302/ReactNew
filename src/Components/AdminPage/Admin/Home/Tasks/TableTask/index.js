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

  useEffect(() => {
    dispatch(actions.getWorkRequest());
  }, []);

  const addWork = () => {
    var workObj = {
      work: keyAdd,
      role: "Doing",
    };
    dispatch(actions.addWorkRequest(workObj));
    setKeyAdd("");
  };

  const deleteWork = (id) => {
    dispatch(actions.deleteWorkRequest(id));
  };

  return (
    <Table sx={{ position: "relative" }}>
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
            <TableTaskItem key={index} work={work} deleteWork={deleteWork} />
          );
        })}
      </TableBody>
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
    </Table>
  );
}
