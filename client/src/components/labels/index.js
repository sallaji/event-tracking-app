import React from 'react';
import styled from 'styled-components';

const LabelComponent = styled.p`
  margin: ${props => props.margin || "0.5rem 0"};
  color: var(--color-violet);
  font-weight: 300;
  font-size: 1.4rem;
  //text-transform: uppercase;
`;

export const Label = ({
  id, name, width, labelText, margin, padding,
  className, error
}) => {

  return <LabelComponent
      id={id}
      name={name}
      width={width}
      padding={padding}
      margin={margin}
      className={className}
      error={error}
  >{labelText}</LabelComponent>
};