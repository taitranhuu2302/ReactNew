import {
  List,
  ListItemButton,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import PersonIcon from "@material-ui/icons/Person";
import BackupTableIcon from "@material-ui/icons/BackupTable";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import RoomIcon from "@material-ui/icons/Room";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";

export default function SideBar() {
  return (
    <>
      <List className="side-list d-flex flex-column align-items-center">
        <ListItemButton alignItems="center" component="a" to="/">
          <ListItemIcon sx={{ width: 200 }}>
            <img
              src="https://vn.aorus.com/Z490-soar-to-new-heights/assets/images/logo-aorus.png"
              alt=""
              className="w-100"
            />
          </ListItemIcon>
        </ListItemButton>
        <Divider sx={{ color: "#999", width: 260, marginBottom: 2 }} />
        <ListItemButton component="a" className="list-item-side" href="/admin">
          <ListItemIcon className="icon-side">
            <ViewQuiltIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItemButton>
        <ListItemButton component="a" className="list-item-side">
          <ListItemIcon className="icon-side">
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>User Profile</ListItemText>
        </ListItemButton>
        <ListItemButton component="a" className="list-item-side">
          <ListItemIcon className="icon-side">
            <BackupTableIcon />
          </ListItemIcon>
          <ListItemText>Table</ListItemText>
        </ListItemButton>
        <ListItemButton component="a" className="list-item-side">
          <ListItemIcon className="icon-side">
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText>Typography</ListItemText>
        </ListItemButton>
        <ListItemButton component="a" className="list-item-side">
          <ListItemIcon className="icon-side">
            <EmojiEmotionsIcon />
          </ListItemIcon>
          <ListItemText>Icons</ListItemText>
        </ListItemButton>
        <ListItemButton component="a" className="list-item-side">
          <ListItemIcon className="icon-side">
            <RoomIcon />
          </ListItemIcon>
          <ListItemText>Map</ListItemText>
        </ListItemButton>
        <ListItemButton component="a" className="list-item-side">
          <ListItemIcon className="icon-side">
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </ListItemButton>
      </List>
      <div className="background"></div>
    </>
  );
}
