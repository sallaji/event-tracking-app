import styled, {css} from 'styled-components'
import React from 'react'
import { Button as MuiButton } from '@material-ui/core';

const colors = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--color-yellow)",
    backgroundHover: "var(--color-primary-hover)",
    colorHover: "var(--color-yellow-hover)"
  },
  primaryOutline: {
    background: "white",
    color: "var(--color-primary)",
    backgroundHover: "var(--color-primary-hover)",
    colorHover: "var(--color-yellow-hover)"
  },
  white: {
    background: "var(--color-white)",
    color: "var(--color-primary-dark)",
    backgroundHover: "var(--color-white-hover)",
    colorHover: "var(--color-primary-hover)"
  },
  yellow: {
    background: "var(--color-yellow)",
    color: "var(--color-primary)",
    backgroundHover: "var(--color-yellow-hover)",
    colorHover: "var(--color-primary-hover)"
  },
  pink: {
    background: "var(--color-pink)",
    color: "white",
    backgroundHover: "var(--color-pink-hover)",
    colorHover: "white)"
  },
  green: {
    background: "var(--color-green)",
    color: "var(--color-primary)",
    backgroundHover: "var(--color-green-hover)",
    colorHover: "var(--color-primary)"
  }
};

const DefaultButtonComponent = styled(MuiButton).attrs(props => ({
  type: props.type || "button",
}))`
display: flex;
justify-content: center;
align-items: center;
background: ${props => colors[props.color].background};
color: ${props => colors[props.color].color};
border: none;
font-weight: 200;
width: ${props => props.width ? props.width : "100%"};
padding: ${props => props.padding || "1.075rem;"};
transition:  0.3s ;
:hover{
background: ${props => colors[props.color].backgroundHover};
color: ${props => colors[props.color].colorHover};
transition:  0.3s ;
cursor: pointer;
}
`;

const DefaultButtonDisabledComponent = styled(DefaultButtonComponent)`
background: white;
 color: #9f9f9f;
:hover{
background: white;
 color: #9f9f9f;
}
`;

export const Button = ({
  text, color = 'primary', padding, width, onClick, onSubmit, type, className,
  disabled, error, children
}) => {
  if (disabled) {
    return <DefaultButtonDisabledComponent color={color}
                                           padding={padding}
                                           width={width}
                                           onClick={onClick}
                                           onSubmit={onSubmit}
                                           type={type}
                                           disabled={disabled}
                                           className={className}
                                           error={error}>
      {children}{text}
    </DefaultButtonDisabledComponent>
  } else {
    return <DefaultButtonComponent color={color}
                                   padding={padding}
                                   width={width}
                                   onClick={onClick}
                                   onSubmit={onSubmit}
                                   type={type}
                                   disabled={disabled}
                                   className={className}
                                   error={error}>
      {children}{text}
    </DefaultButtonComponent>;
  }
};