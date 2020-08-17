import React, {useState} from 'react'
import styled from 'styled-components'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField";
import NumberFormat from 'react-number-format';

import clsx from "clsx";
import theme from '../../styles/theme'

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
}));

const StyledInputComponent = styled(TextField)`
  && .MuiInput-root:hover::after {
    border-color: ${theme.palette.info.main};
  }
`;

export const Input = (props) => {

  const classes = useStyles();
  return (
      props.type === 'currency' ?
          <NumberFormat customInput={StyledInputComponent}
                        decimalScale={2}
                        prefix={'Fr. '}
                        thousandSeparator={true}
                        {...props}/> :
          <StyledInputComponent
              className={clsx(classes.textField, classes.underline)}
              {...props}>
          </StyledInputComponent>
  )
};