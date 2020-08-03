import React from 'react'
import styled from "styled-components"

const InputComponent = styled.input`
  border: 2px solid var(--color-primary-dark);
  display: block;
  margin: 0 0 0.5em;
  font-size: 1.6rem;
  padding: 1rem;
  width: ${props => props.width? props.width: "100%"};
  ::placeholder{
  color: var(color-primary-dark);
  }
  :focus{
  outline-color: var(--color-yellow);
  }

`;
export const Input = ({name, type, width, placeholder, onChange}) =>
    (<InputComponent type={type}
                     name={name}
                     width={width}
                     placeholder={placeholder}
                     onChange={onChange}/>);