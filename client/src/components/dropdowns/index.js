import React from 'react'
import styled from "styled-components";
import {Button} from '../buttons/index'
import history from "../../history";
import {ArrowDropDown} from '@styled-icons/material/ArrowDropDown'
import {Icon} from "../icons";

const DropdownItemComponent = styled.a`
/* Change color of dropdown links on hover */
width:100%;
display: inline-block;
font-size: 1.4rem;
padding: 1.075rem;
cursor: pointer;
&:hover {
background-color: #f1f1f1
}
`;

export const DropdownItem = ({text, fn}) => (<DropdownItemComponent
    className="dropdown-item"
    onClick={e => {
      e.preventDefault();
      return fn;
    }}>{text}</DropdownItemComponent>);

const DropdownContentComponent = styled.div`
width: 100%;
display: none;
position:absolute;
background: white;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
z-index: 2;

&:hover .dropdown-item{
  color: black;
  //padding: 12px 16px;
  text-decoration: none;
  display: block;
}


`;
const DropdownContent = ({children}) => (
    <DropdownContentComponent className="dropdown-content">
      {children}
    </DropdownContentComponent>);

const DropdownComponent = styled.div`
width: ${props => props.width || "100%"};
position:relative;
display: inline-block;
/* Show the dropdown menu on hover */
&:hover .dropdown-content{
  display: block;

}

/* Change the background color of the dropdown button when the dropdown content is shown */
&:hover .dropdown-btn {
  background-color: var(--color-white-hover)
}
&:hover .arrow-dropdown{
transform: rotate(180deg);
transition: 0.4s;
}
`;
const DropdownButtonComponent = styled.div`
text-decoration: underline;
`;

const ArrowDropDownComponent = styled(ArrowDropDown)`
transition: 0.4s;
`;

const DropdownButton = ({children}) => (<DropdownButtonComponent>{children}
</DropdownButtonComponent>);
export const Dropdown = ({width, text, children}) => (
    <DropdownComponent width={width}>
      <DropdownButton>
        <Button text={text} color="white" className="dropdown-btn"><Icon><ArrowDropDownComponent className="arrow-dropdown"/></Icon></Button>
      </DropdownButton>
      <DropdownContent>
        {children}
      </DropdownContent>
    </DropdownComponent>);


