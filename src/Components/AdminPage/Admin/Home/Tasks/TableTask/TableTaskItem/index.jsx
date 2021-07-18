import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";

export default function TabelTaskItem() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox color="secondary" />
        </TableCell>
        <TableCell>
          <Typography variant="body1">
            Flooded: One year later, assessing what was lost and what was found
            when a ravaging rain swept through metro Detroit
          </Typography>
        </TableCell>
        <TableCell>
          <Tooltip title="Update" placement="top">
            <Button>
              <CreateIcon color="secondary" />
            </Button>
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title="Delete" placement="top">
            <Button>
              <CloseIcon color="error" />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
}
