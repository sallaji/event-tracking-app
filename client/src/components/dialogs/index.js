import React from 'react'
import styled from 'styled-components'

const DialogBoxComponent = styled.div`
position:fixed;
background: var(--color-primary);
top:0;
bottom:0;
left:0;
right:0;
opacity:0.9;
display: flex;
justify-content: center;
align-items: center;
z-index: 20;
`;

const DialogContentComponent = styled.div`
position:fixed;
background: white;
top:0;
bottom:0;
left:0;
right: 0;
margin: 2%;
padding:2%;
z-index: 21;
overflow-y: scroll;
`;

export const Dialog = ({close, children}) => {
  return (
      <>
        <DialogBoxComponent/>
        <DialogContentComponent
            onClick={close}>{children}</DialogContentComponent>
      </>)
};

const EventDialogComponent = styled(Dialog)`

`;
export const EventDialog = ({close, children}) => {
  return (
      <EventDialogComponent onClick={close}>{children}</EventDialogComponent>)
};