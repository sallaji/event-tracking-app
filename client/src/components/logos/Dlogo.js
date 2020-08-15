import React from 'react'
import styled from 'styled-components'
import logo from "../../assets/d logo.svg";

const Image = styled.img`
margin:auto 0;
`;
const Dlogo = () => {
  return (<Image src={logo} alt="D Logo"/>)

};

export default Dlogo;