import styled, {css} from 'styled-components'
import React from 'react'

const colors = {
  primary: {
    background: "var(--color-primary-dark)",
    color: "var(--color-yellow)",
    backgroundHover: "var(--color-primary-dark-hover)",
    colorHover: "var(--color-yellow-hover)"
  },
  yellow: {
    background: "var(--color-yellow)",
    color: "var(--color-primary-dark)",
    backgroundHover: "var(--color-yellow-hover)",
    colorHover: "var(--color-primary-dark-hover)"
  }
};

const DefaultButtonComponent = styled.button.attrs(props => ({
  type: "button"
}))`
background: ${props => colors[props.color].background};
color: ${props => colors[props.color].color};
border: none;
font-weight: 200;
width: ${props => props.width ? props.width : "100%"};
padding: 1rem 2rem;
transition:  0.3s ;
:hover{
background: ${props => colors[props.color].backgroundHover};
color: ${props => colors[props.color].colorHover};
transition:  0.3s ;
cursor: pointer;
}
`;
export const Button = ({text, color = 'primary', width, onCLick}) => (
    <DefaultButtonComponent color={color}
                            width={width}
                            onClick={onCLick}>{text}</DefaultButtonComponent>
);