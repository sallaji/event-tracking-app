import React from 'react'
import styled from "styled-components";

export const ContentWrapper = ({children}) =>
    <div>{children}</div>;

const SectionContainerComponent = styled.div`
width: 100vw;
transform: translate(0,4rem);
`;
export const SectionContainer = ({children}) => (
    <SectionContainerComponent>{children}</SectionContainerComponent>
);