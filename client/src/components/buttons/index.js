import styled, {css} from 'styled-components'
import React from 'react'
import MuiButton from '@material-ui/core/Button'
import clsx from "clsx";
import theme from "../../styles/theme";

const ButtonComponent = styled(MuiButton)`
// background-color: ${props => props.color || theme.palette.primary.main };
// color: ${props => props.color || theme.palette.primary.contrastText };
`;
export const Button = (props) => {
  return <ButtonComponent
      {...props}
      color={props.color}
      className={props.className}>{props.text}{props.children}</ButtonComponent>
};
