import React from 'react'
import styled from 'styled-components'

const IconComponent = styled.div`
width: ${props => props.width ? props.width : "2.4rem"};
padding-right: 0.5rem;
`;

export const Icon = ({width, children}) => (
    <IconComponent width={width}>{children}</IconComponent>
);
