import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function HeaderTask() {
  return (
    <>
      <Box className="box badge-purple py-3" sx={{ marginTop: "-30px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Button sx={{ color: "white" }}>
            <WorkOutlineIcon />
            <Typography variant="subtitle1" className="ms-2">
              TODO LIST
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
