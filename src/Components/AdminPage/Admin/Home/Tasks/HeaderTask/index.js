import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import BugReportIcon from "@material-ui/icons/BugReport";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function HeaderTask() {
  return (
    <>
      <Box className="box badge-purple py-3" sx={{ marginTop: "-30px" }}>
        <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
          <Typography variant="subtitle1" className="me-3">
            Task:
          </Typography>
          <Button sx={{ color: "white" }}>
            <BugReportIcon />
            <Typography className="ms-2" variant="body2">
              BUGS
            </Typography>
          </Button>
          <Button sx={{ color: "white" }}>
            <WorkOutlineIcon />
            <Typography variant="body2" className="ms-2">
              Doing
            </Typography>
          </Button>
          <Button sx={{ color: "white" }}>
            <CheckCircleIcon />
            <Typography variant="body2" className="ms-2">
              Done
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
