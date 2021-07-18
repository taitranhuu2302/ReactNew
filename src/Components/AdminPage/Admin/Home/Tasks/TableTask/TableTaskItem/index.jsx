import React from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function TabelTaskItem(props) {
  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox color="secondary" />
        </TableCell>
        <TableCell>
          <Typography variant="body1">{props.work.work}</Typography>
        </TableCell>
        <TableCell align="right">
          <Tooltip title="Delete" placement="top">
            <Button onClick={() => props.deleteWork(props.work.id)}>
              <CloseIcon color="error" />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
}
