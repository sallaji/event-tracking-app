import React, {useState} from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';
import MuInput from '@material-ui/core/Input';


const InputComponent = styled.input.attrs(props => ({
      value: props.value,
      error: props.error
    }
))`
//background: red;
  display: block;
   margin: ${props => props.margin || "none"};
  //font-size: 1.6rem;
   padding: ${props => props.padding || "1rem"};
  width: ${props => props.width ? props.width : "100%"};
  ::placeholder{
  color: var(color-primary-dark);
  }
:focus{
 background: red !important;
  outline-color: var(--color-yellow) !important;
  }
}
`;
InputComponent.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export const Input = ({
  id, name, value = '', type, width, padding, margin, placeholder,
  className, onChange, onClick, onFocus, readOnly = false, error, ref
}) => {

  return (

      <InputComponent
          id={id}
          type={type}
          name={name}
          width={width}
          padding={padding}
          margin={margin}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          readOnly={readOnly}
          value={value}
          error={error}/>
  )
};