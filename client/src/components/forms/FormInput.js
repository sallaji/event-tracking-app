import React, {forwardRef, useState} from "react";
import styled from 'styled-components';
import {Input} from "../inputs";
import {Label} from "../labels";
import Datepicker from "../inputs/DatepickerInput";


const FormInputComponent = styled.div`
  width: ${props => props.width ? props.width : "100%"};
`;

export const FormInput = (
    {
      id, name, value = '', type, labelText, width, padding, margin, placeholder,
      className, onChange, onClick, onFocus, inputWidth, readOnly = false,
      error, pattern
    }) => {

  return (
      <FormInputComponent className={className}>
        {
          labelText && <Label for={name}
                              labelText={labelText}
                              padding={padding}
                              error={error}/>
        }
        {type === 'datepicker' ?
            <Datepicker
                onChange={onChange}
                name={name}
                readOnly={readOnly}
                value={value}
            /> :
            <Input id={id}
                   type={type}
                   width={inputWidth}
                   name={name}
                   padding={padding}
                   placeholder={placeholder}
                   className={className}
                   onChange={onChange}
                   onClick={onClick}
                   onFocus={onFocus}
                   value={value}
                   readOnly={readOnly}
                   pattern={pattern}
                   error={error}/>
        }
      </FormInputComponent>
  )
};