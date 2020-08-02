import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from "../../contexts/UserContext";
import _ from 'lodash'
import Navbar from "./NavBar";

const Header = ({routes}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (<Navbar navbarOpen={navbarOpen}
  handleNavbar={handleNavbar}
  routes={routes}
  />)
};

// const Header = () => {
//
//   const {user, setUser} = useContext(UserContext);
//   return (
//       <div className="menu-bar">
//         {
//           !_.isEmpty(user) && <div>{user.name}</div>
//         }
//         {
//           _.isEmpty(user) && <div>no esta autenticado</div>
//         }
//         {
//           !_.isEmpty(user) && <a className="btn menu-btn"
//                                  href={"/logout"}
//                                  title="ausloggen"
//           >
//           </a>
//         }
//       </div>
//   )
// };

export default Header;