import React from 'react'
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
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
  && .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
   border-color: ${theme.palette.info.main};
}

`;

export const Input = (props) => {

  const classes = useStyles();
  return (
      props.type === 'number' ?
          <NumberFormat customInput={StyledInputComponent}
                        decimalScale={2}
                        onFocus={e => e.target.select()}
                        variant="outlined"

                        {...props}/> :
          props.type === 'currency' ?
              <NumberFormat customInput={StyledInputComponent}
                            decimalScale={2}
                            thousandSeparator={true}
                            onFocus={e => e.target.select()}
                            prefix='Fr. '
                            variant="outlined"

                            {...props}/> :
              <StyledInputComponent
                  className={clsx(classes.textField, classes.underline)}
                  onFocus={e => e.target.select()}
                  variant="outlined"
                  {...props}>
              </StyledInputComponent>
  )
};