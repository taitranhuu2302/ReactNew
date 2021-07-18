import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import HeaderTask from "./HeaderTask";
import TableTask from "./TableTask";

export default function Tasks() {
  return (
    <Grid container className="p-4" spacing={3}>
      <Grid item xs={6}>
        <Box className="box">
          <HeaderTask />
          <TableTask />
        </Box>
      </Grid>
    </Grid>
  );
}
