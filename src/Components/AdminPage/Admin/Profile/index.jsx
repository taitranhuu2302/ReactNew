import React, { useState } from "react";

import {
  Box,
  Grid,
  TextField,
  Button,
  Input,
  InputLabel,
  List,
  ListItem,
  Avatar,
  Typography,
  ListItemButton,
} from "@material-ui/core";
import HeaderTask from "./../Home/Tasks/HeaderTask";

export default function Profile() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    postalCode: "",
    about: "",
  });

  const listInput = [
    {
      label: "Username",
      name: "username",
      width: 3,
      value: inputValue.username,
    },
    {
      label: "Email Address",
      name: "email",
      width: 3,
      value: inputValue.email,
    },
    {
      label: "First Name",
      width: 6,
      name: "firstName",
      value: inputValue.firstName,
    },
    {
      label: "Last Name",
      width: 6,
      name: "lastName",
      value: inputValue.lastName,
    },
    {
      label: "City",
      width: 4,
      name: "city",
      value: inputValue.city,
    },
    {
      label: "Country",
      width: 4,
      name: "country",
      value: inputValue.country,
    },
    {
      label: "Postal Code",
      width: 4,
      name: "postalCode",
      value: inputValue.postalCode,
    },
    {
      label: "About me",
      width: 12,
      name: "about",
      value: inputValue.about,
    },
  ];

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const updateProfile = () => {
    console.log(inputValue);
  };

  return (
    <Box className="body-admin m-0 pt-5  bgr-admin" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={1} className="ps-4 w-100">
        <Grid item xs={12} md={8} className="mb-5">
          <Box className="box" sx={{ minHeight: "476px" }}>
            <HeaderTask
              bgr="badge-purple"
              title="Edit Profile"
              position="start"
              caption="Complete your profile"
            />
            <Grid container spacing={2} className="py-4 px-3">
              <Grid item xs={6}>
                <InputLabel>Company</InputLabel>
                <Input
                  color="secondary"
                  className="w-100"
                  type="text"
                  readOnly
                  value="How2Code"
                />
              </Grid>
              {listInput.map((item, index) => {
                return (
                  <Grid key={index} item xs={item.width}>
                    <InputLabel>{item.label}</InputLabel>
                    <Input
                      color="secondary"
                      className="w-100"
                      type="text"
                      value={item.value || ""}
                      onChange={onChange}
                      name={item.name}
                    />
                  </Grid>
                );
              })}
              <Grid item xs={12} className="mt-3">
                <Button
                  onClick={updateProfile}
                  variant="contained"
                  color="secondary"
                >
                  UPDATE PROFILE
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="box">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-46px",
              }}
            >
              <Avatar
                sx={{ width: "120px", height: "120px" }}
                src="https://demos.creative-tim.com/material-dashboard-react/static/media/marc.e8607287.jpg"
              />
            </Box>
            <List className="mt-4 pb-5">
              <ListItem sx={{ justifyContent: "center" }}>
                <Typography variant="h5">Students</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }}>
                <Typography>Tran Huu Tai</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }}>
                <Typography>
                  You only live once, but if you do it right, once is enough
                </Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }} className="mt-5">
                <Button className="w-25" variant="contained" color="secondary">
                  Follow me
                </Button>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
