import React, {useContext, useEffect, useState} from 'react'
import {ContentWrapper, SectionContainer} from '../container'
import {UserContext} from "../../contexts/UserContext";
import userService from "../../services/user_service";
import AppBar from "../header/AppBar";

const Layout = ({children}) => {
  const {user, setUser} = useContext(UserContext);
  const [routes, setRoutes] = useState(null);
  useEffect(() => {
    if (user) {
      userService.getNavigationLinks(user).then(
          result => setRoutes(result))
    }
  }, [user]);
  return (<ContentWrapper>
    <AppBar routes={routes}/>
    <SectionContainer>{children}</SectionContainer>
  </ContentWrapper>);
};

export default Layout;