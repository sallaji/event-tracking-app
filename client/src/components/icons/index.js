import React from 'react'
import styled from 'styled-components'

const IconComponent = styled.div`
width: ${props => props.width ? props.width : "2.4rem"};
padding: ${props => props.padding || "0 0.5rem 0 0"};
margin: ${props => props.margin || "0"};
cursor: pointer;
transition:0.3s;
:hover{
color: var(--color-grey-hover);
transition:0.3s;
}
`;

export const Icon = ({
  width,
  children,
  padding,
  margin,
  onClick
}) => (
    <IconComponent padding={padding}
                   onClick={onClick}
                   margin={margin}
                   width={width}>{children}</IconComponent>
);
