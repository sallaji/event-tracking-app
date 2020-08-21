import React, {createRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField";
import NumberFormat from 'react-number-format';
import clsx from "clsx";
import theme from '../../styles/theme'
import _ from 'lodash'

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

const CustomNumberFormat = (props) => {
  const formatToNumber = (e) => {
    const prefix = defaultProps.prefix || '';
    e.target.value = e.target.value.replace(prefix, '');
    e.target.value = e.target.value.replace(',', '');
    (props.onChange || _.identity)(e);
  };
  let defaultProps = {
    ...props
    , ...{
      customInput: StyledInputComponent,
      decimalScale: 2,
      onFocus: eval('e => e.target.select()'),
      variant: 'outlined',
      thousandSeparator: true,
      type: 'text',
      onChange: eval('formatToNumber')
    }
  };
  if (props.type === 'currency') {
    defaultProps = {
      ...defaultProps, ...{
        prefix: 'Fr. ',
      }
    }
  }
  return (
      <NumberFormat {...defaultProps} />
  )
};

export const Input = (props) => {
  const classes = useStyles();
  return (
      props.type === 'text' ?
          <StyledInputComponent
              className={clsx(classes.textField, classes.underline)}
              onFocus={e => e.target.select()}
              variant="outlined"
              {...props}>
          </StyledInputComponent> :
          <CustomNumberFormat {...props}/>

  )
};