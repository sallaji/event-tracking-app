import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/daschi-logo.svg'

const Brand = () => {
  return (<Image src={logo} alt="Dampfschiff"/>)
};
export default Brand

const Image = styled.img`
    height:85%;
    margin:auto 0;
    `;