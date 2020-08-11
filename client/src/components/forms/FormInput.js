import React, {forwardRef, useState} from "react";
import styled from 'styled-components';
import {Input} from "../inputs";
import {Label} from "../labels";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale, setDefaultLocale} from "react-datepicker";
import de from 'date-fns/locale/de';
import _ from "lodash";
registerLocale('de', de);

const FormInputComponent = styled.div`
  width: ${props => props.width ? props.width : "100%"};
.rasta-stripes{
width:inherit;
}
`;

export const FormInput = (
    {
      id, name, value = '', type, labelText, width, padding, margin, placeholder,
      className, onChange, onClick, onFocus, inputWidth, readOnly = false,
      error, pattern
    }) => {

  const changeDate = (date) => {
    const fakeTarget = {
      target: {
        name: name,
        value: new Date(date).getTime()
      }
    };
    (onChange || _.identity)(fakeTarget)
  };

  const ref = React.createRef();

  const CustomDatepickerInput = forwardRef(({value, onClick},
      _ref) => (
      <div onClick={onClick}
           ref={_ref}
      >{value}</div>
  ));
  return (
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
                onChange={date => changeDate(date)}
                name="hola"
                locale="de"
                dateFormatCalendar={"MMM yyyy"}
                //TODO Handle this min and max date with momentjs
                // minDate={subMonths(new Date(), 6)}
                // maxDate={addMonths(new Date(), 6)}
                // showMonthYearDropdown
                //TODO see when events will take place
                // highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
                disabled={readOnly}
                customInput={<CustomDatepickerInput ref={ref}/>
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