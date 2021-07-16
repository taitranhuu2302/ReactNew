import React from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Box, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

export default function Header() {
  return (
    <>
      <Box className="side-bar"></Box>
      <Box className="header-nav">
        <Grid container spacing={0} direction="row" alignItems="center">
          <Grid item xs="8">
            <Button href="/admin" className="header-nav-title color-black">
              Dashboard
            </Button>
          </Grid>
          <Grid
            item
            xs="4"
            className="d-flex"
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button href="/admin" className="color-black">
              <ViewQuiltIcon />
            </Button>
            <Button href="/admin" className="color-black">
              <NotificationsIcon />
            </Button>
            <Button href="/admin" className="color-black">
              <PersonIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
