import React from 'react'
import styled from "styled-components";

const ContentWrapperComponent = styled.div`
width: 100%;
height: 100%;
`;
export const ContentWrapper = ({children}) =>
    (<ContentWrapperComponent>{children}</ContentWrapperComponent>);

const SectionContainerComponent = styled(ContentWrapperComponent)`
padding-top: 4rem;
`;
export const SectionContainer = ({children}) => (
    <SectionContainerComponent>{children}</SectionContainerComponent>
);

const CenteredSectionContainerComponent =  styled(ContentWrapperComponent)`
display: flex;
align-items: center;
justify-content: center;
`;
export const CenteredSectionContainer = ({children}) => (
    <CenteredSectionContainerComponent>{children}</CenteredSectionContainerComponent>
);

const LoginFormContainerComponent = styled.div`
padding-top:1rem;
width:40%;
    @media (max-width: 768px) {
      width:80%;
    }
`;
export const LoginFormContainer = ({children}) => (
    <LoginFormContainerComponent>{children}</LoginFormContainerComponent>
);