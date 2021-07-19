import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation } from "react-router-dom";

import {
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function HeaderNav(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/admin":
        setTitle("Dashboard");
        break;
      case "/admin/profile":
        setTitle("Profile");
        break;
      case "/admin/table":
        setTitle("table");
        break;
      case "/admin/typography":
        setTitle("typography");
        break;
      case "/admin/icons":
        setTitle("icons");
        break;
      case "/admin/maps":
        setTitle("maps");
        break;
      case "/admin/notification":
        setTitle("notification");
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
      <Grid
        container
        spacing={0}
        className="bgr-admin px-3"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Button href="/admin" className="header-nav-title color-black">
            {title}
          </Button>
        </Grid>
        <Hidden mdUp={true}>
          <Grid
            item
            xs={6}
            className="d-flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              onClick={() => props.onToggleSide()}
              sx={
                props.toggleSide
                  ? {
                      backgroundColor: "#eeee",
                      transition: "all 0.5s",
                      marginRight: "260px",
                    }
                  : { backgroundColor: "#eeee", transition: "all 0.5s" }
              }
            >
              <MenuIcon sx={{ color: "black" }} />
            </Button>
          </Grid>
        </Hidden>
        <Hidden mdDown={true}>
          <Grid
            item
            xs={6}
            className="d-flex"
            flexDirection="row"
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
            <Button className="color-black">
              <NotificationsIcon />
            </Button>
            <Button
              onClick={(e) => setAnchorEl(e.currentTarget)}
              className="color-black"
            >
              <PersonIcon />
            </Button>
            <Menu
              id="menu-user"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
}
