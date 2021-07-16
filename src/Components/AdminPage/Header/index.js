import React, { useState } from "react";
import "./styles.scss";

import { Box, Button, Hidden, Fab } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import HeaderNav from "./HeaderNav";
import SideBar from "./SideBar";

export default function Header() {
  const [toggleSide, setToggleSide] = useState(false);
  const onToggleSide = () => {
    setToggleSide(!toggleSide);
  };
  return (
    <>
      <Box className={toggleSide ? "side-bar active-side" : "side-bar"}>
        <SideBar />
      </Box>
      <Box className="header-nav">
        <HeaderNav toggleSide={toggleSide} onToggleSide={onToggleSide} />
      </Box>
      <Box className="settings">
        <Button className="button-settings">
          <SettingsIcon className="settings-icons" />
        </Button>
      </Box>
    </>
  );
}
