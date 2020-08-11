import React, {useState} from "react";
import styled from 'styled-components';
import {Input} from "../inputs";
import {Label} from "../labels";
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';

const FormInputComponent = styled.div`
  width: ${props => props.width ? props.width : "100%"};
`;

export const FormInput = (
    {
      id, name, value = '', type, labelText, width, padding, margin, placeholder,
      className, onChange, onClick, onFocus, inputWidth, readOnly = false,
      error, pattern
    }) => {

  const [startDate, setStartDate] = useState(new Date(value));
  const [open, setOpen] = useState(false);
  const openDatePicker = () => setOpen(!open);
  const CustomDatepickerInput = ({value}) => (
      <button className="hoo" onClick={openDatePicker}>{value}</button>
  );
  return (
      //TODO COntinuar aquimkkkk
      <FormInputComponent className={className}>
        {
          labelText && <Label for={name}
                              labelText={labelText}
                              padding={padding}
                              margin={margin}
                              error={error}/>
        }
        {type === 'datepicker' ?
            <DatePicker
                selected={value}
                onChange={date => setStartDate(date)}
                locale="de"
                customInput={<CustomDatepickerInput/>
                }
            /> :
            <Input id={id}
                   type={type}
                   width={inputWidth}
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
                   pattern={pattern}
                   error={error}/>
        }
      </FormInputComponent>
  )
};