import React, {createRef, useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import {Button} from '../buttons/index'
import {ArrowDropDown} from '@styled-icons/material/ArrowDropDown'
import {Icon} from "../icons";
import palette from "../../styles/palette";

const DropdownItemComponent = styled.a`
/* Change color of dropdown links on hover */
width:100%;
display: inline-block;
font-size: 0.875rem;
padding: 1.075rem;
cursor: pointer;
&:hover {
background-color: #f1f1f1
}
`;

export const DropdownItem = ({text, name, onClick}) => (
    <DropdownItemComponent
        className="dropdown-item"
        onClick={onClick}
        name={name}>
      {text}
    </DropdownItemComponent>);

const DropdownContentComponent = styled.div`
max-width: 10rem;
display: block;
position:absolute;
background: white;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
z-index: 3;

`;
const DropdownContent = ({onClick, children}) => (
    <DropdownContentComponent onClick={onClick}
                              className="dropdown-content">
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
  background-color: ${palette.gray.light}
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

export const Dropdown = ({width, text, children}) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };
  const handleChange = value => {
    // onChange(selectedValue);
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      // add when mounted
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // return function to be called when unmounted
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)

  }, [open]);

  return <DropdownComponent width={width} ref={node}>
    <DropdownButton>
      <Button text={text}
              color="white"
              className="dropdown-btn"
              onClick={e => setOpen(!open)}
      >
        <Icon>
          <ArrowDropDownComponent
              className="arrow-dropdown"/>
        </Icon>
      </Button>
    </DropdownButton>
    {open &&
    <DropdownContent onClick={e => setOpen(false)}>
      {children}
    </DropdownContent>
    }
  </DropdownComponent>;
};


