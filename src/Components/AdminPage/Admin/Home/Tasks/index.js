import React from "react";
import { Grid, Box } from "@material-ui/core";

export default function Tasks() {
  return (
    <Grid container className="p-4" spacing={3}>
      <Grid item xs={12}>
        <Box className="box">
          <Box className="box">Tasks</Box>
        </Box>
      </Grid>
    </Grid>
  );
}
