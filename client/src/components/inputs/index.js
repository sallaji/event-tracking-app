import React, {useState} from 'react'

import {makeStyles, useTheme} from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {},
  textField: {
    width: "100%",
    // backgroundColor: "red"
  }
}));
export const Input = (props) => {

  const classes = useStyles();
  return (
        <TextField className={classes.textField} {...props}>
        </TextField>
  )
};