import React from 'react'
import styled from "styled-components"

const InputComponent = styled.input`
  border: 1px solid var(--color-primary-dark);
  display: block;
  margin: ${props => props.margin || "0 0 0.5em"};
  font-size: 1.6rem;
  padding: ${props => props.padding || "1rem"};
  width: ${props => props.width ? props.width : "100%"};
  ::placeholder{
  color: var(color-primary-dark);
  }
  :focus{
  outline-color: var(--color-yellow);
  }

`;
export const Input = ({
  name, type, width, padding, margin, placeholder,
  className, onChange
}) =>
    (<InputComponent type={type}
                     name={name}
                     width={width}
                     padding={padding}
                     margin={margin}
                     placeholder={placeholder}
                     className={className}
                     onChange={onChange}/>);