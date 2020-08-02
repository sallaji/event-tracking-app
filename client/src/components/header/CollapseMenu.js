import React from 'react';
import styled from 'styled-components';
import _ from 'lodash'
import {useSpring, animated} from 'react-spring';

const CollapseMenu = ({routes, navbarOpen, handleNavbar}) => {
  const {open} = useSpring({open: navbarOpen ? 0 : 1});

  if (navbarOpen === true) {
    return (
        <CollapseWrapper style={{
          transform: open.interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200],
          }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
        >
          <NavLinks>
            {_.map(routes, route =>
                <li><a href={route.path} onClick={handleNavbar}>{route.name}</a>
                </li>
            )}
          </NavLinks>
        </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.6rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;