import styled, {css} from 'styled-components'
import React from 'react'

const colors = {
  primary: {
    background: "var(--color-primary-dark)",
    color: "var(--color-yellow)",
    backgroundHover: "var(--color-primary-dark-hover)",
    colorHover: "var(--color-yellow-hover)"
  },
  white: {
    background: "var(--color-white)",
    color: "var(--color-primary-dark)",
    backgroundHover: "var(--color-white-hover)",
    colorHover: "var(--color-primary-dark-hover)"
  },
  yellow: {
    background: "var(--color-yellow)",
    color: "var(--color-primary-dark)",
    backgroundHover: "var(--color-yellow-hover)",
    colorHover: "var(--color-primary-dark-hover)"
  },
  pink: {
    background: "var(--color-pink)",
    color: "white",
    backgroundHover: "var(--color-pink-hover)",
    colorHover: "white)"
  },
  green: {
    background: "var(--color-green)",
    color: "var(--color-primary-dark)",
    backgroundHover: "var(--color-green-hover)",
    colorHover: "var(--color-primary-dark)"
  }
};

const DefaultButtonComponent = styled.button.attrs(props => ({
  type: props.type || "button",
  // className: props.className
}))`
display: flex;
justify-content: center;
align-items: center;
background: ${props => colors[props.color].background};
color: ${props => colors[props.color].color};
border: none;
font-weight: 200;
width: ${props => props.width ? props.width : "100%"};
padding: 1.075rem;
transition:  0.3s ;
:hover{
background: ${props => colors[props.color].backgroundHover};
color: ${props => colors[props.color].colorHover};
transition:  0.3s ;
cursor: pointer;
}
`;
export const Button = ({
  text, color = 'primary', width, onCLick, type, className,
  children
}) => (
    <DefaultButtonComponent color={color}
                            width={width}
                            onClick={onCLick}
                            type={type}
                            className={className}>
      {children}{text}
    </DefaultButtonComponent>);