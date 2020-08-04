import React from 'react'
import styled from "styled-components";
import {useSpring, animated, config} from "react-spring";
import _ from 'lodash'
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import history from "../../history";

const Navbar = ({routes, navbarOpen, handleNavbar}) => {
  const barAnimation = useSpring({
    from: {transform: 'translate3d(0, -10rem, 0)'},
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: {transform: 'translate3d(0, 30px, 0)', opacity: 0},
    to: {transform: 'translate3d(0, 0, 0)', opacity: 1},
    delay: 200,
    config: config.wobbly,
  });

  return (
      <>
        <NavBar style={barAnimation}>
          <FlexContainer>
            <Brand/>
            <NavLinks style={linkAnimation}>
              {_.map(routes, (route, index) =>
                  <a key={index} href="" onClick={e => {
                    e.preventDefault();
                    history.push(route.path)
                  }}>{route.name}</a>
              )}
            </NavLinks>
            <BurgerWrapper>
              <BurgerMenu
                  navbarOpen={navbarOpen}
                  handleNavbar={handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBar>
        <CollapseMenu
            navbarOpen={navbarOpen}
            handleNavbar={handleNavbar}
            routes={routes}
        />
      </>
  )
};

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--color-primary-dark);
  z-index: 20;
  font-size: 1.6rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 4rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
    height:inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  & a {
    color: white;
    font-weight: 400;
    border-bottom: 2px solid transparent;
    padding: 0 1.5rem;
    transition: all 200ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    height: inherit;
        display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #fdcb6e;
      border-bottom: 2px solid #fdcb6e;
      //background: var(--color-primary-light)
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;