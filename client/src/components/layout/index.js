import React, {useContext, useEffect, useState} from 'react'
import Proptypes from 'prop-types'
import Header from '../header'
import {ContentWrapper} from '../container'
import {UserContext} from "../../contexts/UserContext";
import userService from "../../services/user_service";

const Layout = ({children}) => {
  const {user, setUser} = useContext(UserContext);
  const [routes, setRoutes] = useState(null);
  useEffect(() => {
    if(user){
      userService.getNavigationLinks(user).then(
          result => setRoutes(result))
    }
  }, [user]);
  return (<ContentWrapper>
    <Header routes={routes}/>
    <main>
      {children}
    </main>

  </ContentWrapper>);
};

export default Layout;