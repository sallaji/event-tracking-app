import React from 'react'
import styled from "styled-components";

const ContentWrapperComponent = styled.div`
width: 100vw;
height: 100vh;
`;
export const ContentWrapper = ({children}) =>
    (<ContentWrapperComponent>{children}</ContentWrapperComponent>);

const SectionContainerComponent = styled.div`
width: 100%;
height:100%;
padding-top: 4rem;
`;
export const SectionContainer = ({children}) => (
    <SectionContainerComponent>{children}</SectionContainerComponent>
);

const CenteredSectionContainerComponent = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width:100%
`;
export const CenteredSectionContainer = ({children}) => (
    <CenteredSectionContainerComponent>{children}</CenteredSectionContainerComponent>
);

const LoginFormContainerComponent = styled.div`
position: absolute;
width:40%;
    @media (max-width: 768px) {
      width:80%;
    }
`;
export const LoginFormContainer = ({children}) => (
    <LoginFormContainerComponent>{children}</LoginFormContainerComponent>
);