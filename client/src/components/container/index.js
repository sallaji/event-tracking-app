import React from 'react'
import styled from "styled-components";
import palette from "../../styles/palette";

const ContentWrapperComponent = styled.div`
width: 98%;
height: 100%;
margin: 0 auto;
`;
export const ContentWrapper = ({children}) =>
    (<ContentWrapperComponent>{children}</ContentWrapperComponent>);

const SectionContainerComponent = styled(ContentWrapperComponent)`
padding-top: 4rem;
`;
export const SectionContainer = ({children}) => (
    <SectionContainerComponent>{children}</SectionContainerComponent>
);

const CenteredSectionContainerComponent = styled(ContentWrapperComponent)`
display: flex;
align-items: center;
justify-content: center;
`;
export const CenteredSectionContainer = ({children}) => (
    <CenteredSectionContainerComponent>{children}</CenteredSectionContainerComponent>
);

const LoginFormContainerComponent = styled.div`
display:grid;
justify-content: center;
align-items: center;
padding-top:1rem;
width:40%;
grid-template-columns: 1fr;
.login-failed-animation-and-text{
height: 60px;
}

.login-failed-animation-and-text > div{
display: flex;
justify-content: center;
align-items: center;
}

.form-controller{
margin: 1rem 0;
}

    @media (max-width: 768px) {
      width:80%;
    }
`;
export const LoginFormContainer = ({children}) => (
    <LoginFormContainerComponent>{children}</LoginFormContainerComponent>
);