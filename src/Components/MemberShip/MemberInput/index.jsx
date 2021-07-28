import React from "react";
import { Grid } from "@material-ui/core";
import InputForm from "./Input";

export default function MemberInput(props) {
  return (
    <>
      <Grid container spacing={1}>
        {props.inputList.map((item, index) => {
          return (
            <InputForm
              item={item}
              handleChange={props.handleChange}
              key={index}
            />
          );
        })}
      </Grid>
    </>
  );
}
