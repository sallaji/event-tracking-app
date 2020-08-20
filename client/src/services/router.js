import React, {useEffect, useMemo, useState} from 'react';

import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import history from '../history'
import Home from "../pages/Home"
import Login from "../pages/Login"
import {UserContext} from "../contexts/UserContext";
import AuthService from "../services/auth-service"
import Events from "../pages/Events";

const AppRouter = ({serverUrl}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  const getJWT = () =>
      AuthService.getCurrentUser(serverUrl).then(user => {
        setUser(user)
      });

  useEffect(
      () => {
        getJWT()
      }
      , []);

  return (
      <UserContext.Provider value={providerValue}>
          <Router history={history}>
            <Switch>
              <Route path="/login" exact>
                <Login serverUrl={serverUrl}>Login</Login>
              </Route>
              <Route path="/home" exact>
                <Home path="/home"/>
              </Route>
              <Route path="/events" exact>
                <Events path="/events" serverUrl={serverUrl}>Events</Events>
              </Route>
            </Switch>
          </Router>
      </UserContext.Provider>
  );
};
export default AppRouter;