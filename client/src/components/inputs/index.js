import React, {useState} from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';

const InputComponent = styled.input.attrs(props => ({
  value: props.value,
  error: props.error
}))`
  border: ${props => props.error ? `1px solid var(--color-red)` :
    `1px solid var(--color-primary)`};
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
  className, onChange, onClick, onFocus, readOnly=false, error
}) => {
  if (type === 'checkbox') {
    return (<CheckboxComponent id={id}
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
                               value={value}
                               readOnly={readOnly}
                               error={error}/>)
  } else {
    return (<InputComponent id={id}
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
                            error={error}/>)
  }
};

const CheckboxComponent = styled(InputComponent)`

`;