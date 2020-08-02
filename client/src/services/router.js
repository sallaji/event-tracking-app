import React, {useEffect, useMemo, useState} from 'react';
import {Router} from '@reach/router'
import history from '../history'
import Home from "../pages/Home"
import Login from "../pages/Login"
import {UserContext} from "../contexts/UserContext";
import AuthService from "../services/auth-service"

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
          <Home path="/home"/>
        </Router>
      </UserContext.Provider>
  );
};
export default AppRouter;