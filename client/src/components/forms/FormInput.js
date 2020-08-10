import React from "react";
import styled from 'styled-components';
import {Input} from "../inputs";
import {Label} from "../labels";

const FormInputComponent = styled.div`
  width: ${props => props.width ? props.width : "100%"};
`;


export const FormInput = (
    {
      id, name, value = '', type, labelText, width, padding, margin, placeholder,
      className, onChange, onClick, onFocus, readOnly = false, error
    }) => {
  return (
      <FormInputComponent>
        {
          labelText && <Label for={name}
                              labelText={labelText}
                              padding={padding}
                              margin={margin}
                              className={className}
                              error={error}/>
        }
        <Input id={id}
               type={type}
               name={name}
               padding={padding}
               margin={margin}
               placeholder={placeholder}
               className={className}
               onChange={onChange}
               onClick={onClick}
               onFocus={onFocus}
               value={value}
               readOnly={readOnly}
               error={error}/>
      </FormInputComponent>
  )
};