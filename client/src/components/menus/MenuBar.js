import React, {useContext} from 'react'
import {UserContext} from "../../contexts/UserContext";
import LogoutIcon from "@material-ui/icons/MeetingRoom"
import _ from 'lodash'

const MenuBar = () => {

  const {user, setUser} = useContext(UserContext);

  return (
          <div className="menu-bar">
            {
              !_.isEmpty(user) && <div>autenticado mk</div>
            }
            {
              _.isEmpty(user) && <div>no esta autenticado</div>
            }
            {
              !_.isEmpty(user) && <a className="btn menu-btn"
              href={"/logout"}
              title="ausloggen"
              >
                <LogoutIcon/>
              </a>
            }
          </div>
      )
};

export default MenuBar;