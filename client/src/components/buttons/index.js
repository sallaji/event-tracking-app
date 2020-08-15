import styled, {css} from 'styled-components'
import React from 'react'
import MuiButton from '@material-ui/core/Button'
import clsx from "clsx";

const ButtonComponent = styled(MuiButton)`

`;
export const Button = (props) => {
  return <ButtonComponent
      {...props}
      className={props.className}/>
};
