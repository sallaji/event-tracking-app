import React, {useEffect} from 'react';
import styled from 'styled-components';
import _ from 'lodash'
import {useSpring, animated} from 'react-spring';

const CollapseMenu = ({routes, navbarOpen, handleNavbar}) => {
    return (
        navbarOpen && <CollapseWrapper>
          <NavLinks>
            {_.map(routes, (route, index) =>
                <li key={index}><a href={route.path} onClick={handleNavbar}>{route.name}</a>
                </li>
            )}
          </NavLinks>
        </CollapseWrapper>
    );
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: var(--color-primary);
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1;
  
      @media (min-width: 768px) {
      display: none;
    }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.6rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;
    display: block;
        transition: all 300ms linear 0s;
        padding: 0.5rem 2.5rem;

    &:hover {
      transition: all 300ms linear 0s;
      color: #fdcb6e;
      background-color: var(--color-primary-hover);
    }
  }
`;