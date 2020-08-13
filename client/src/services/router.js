import React, {useEffect, useMemo, useState} from 'react';
import {Router} from '@reach/router'
import history from '../history'
import Home from "../pages/Home"
import Login from "../pages/Login"
import {UserContext} from "../contexts/UserContext";
import AuthService from "../services/auth-service"
import Events from "../pages/Events";
import { StylesProvider } from '@material-ui/styles';
import GlobalStyles from "../styles/Global";

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
          <Router>
            <Login path="/login" serverUrl={serverUrl}>Login</Login>
            <Events path="/events" serverUrl={serverUrl}>Events</Events>
            <Home path="/home"/>
          </Router>
      </UserContext.Provider>
  );
};
export default AppRouter;