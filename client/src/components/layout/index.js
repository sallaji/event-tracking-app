import React from 'react'
import Proptypes from 'prop-types'
import Header from '../header'
import {ContentWrapper} from '../container'

const Layout = ({children}) => {
  return (<ContentWrapper>
    <Header/>
    <main>
      {children}
    </main>

  </ContentWrapper>);
};

export default Layout;