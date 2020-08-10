import React from 'react'
import styled from 'styled-components'
import {Close} from '@styled-icons/evil'
import {useSpring, animated} from 'react-spring'

import {Icon} from "../icons";

const DialogBoxComponent = styled(animated.div)`
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

const DialogContentComponent = styled(animated.div)`
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

const DialogHeaderComponent = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 0;
`;

export const Dialog = ({close, children, title}) => {
  const boxProps = useSpring({opacity: 1, from: {opacity: 0}});
  const contentProps = useSpring({
    to: {
      opacity: 1,

      transform: 'translate3d(0,0,0)'
    },
    from:{
      opacity:0,
      transform: 'translate3d(0,100vh,0)'

      // marginTop: "100%"
    }
  });
  return (
      <>
        <DialogBoxComponent style={boxProps}/>
        <DialogContentComponent style={contentProps}>
          <DialogHeaderComponent>
            <div>
              <h2>{title}</h2>
            </div>
            <Icon
                margin="1.5rem"
                padding="0"
                width="3rem"
                onClick={close}
            ><Close/></Icon>
          </DialogHeaderComponent>
          {children}</DialogContentComponent>
      </>)
};

const EventDialogComponent = styled(Dialog)`

`;
export const EventDialog = ({title, close, children}) => {
  return (
      <EventDialogComponent title={title}
                            close={close}>{children}</EventDialogComponent>)
};