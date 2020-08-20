import React from 'react'
import styled from 'styled-components'
import loader from '../../app/images/loader.gif'

export const Loader = () => {
  return (<LoaderComponent >
    <img src={loader} alt="Am laden..."/>
  </LoaderComponent>)
};

const LoaderComponent = styled.div`
position: relative;
top:6rem;
right:0;
left:0;
bottom:0;
display: flex;
justify-content: center;
align-items: center;

img{
height:128px;
}
    `;