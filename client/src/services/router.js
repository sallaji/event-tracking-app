import React, {useEffect, useMemo, useReducer, useState} from 'react';
// import {Router, Route} from 'react-router-dom'
import {redirectTo, Router} from '@reach/router'
import history from '../history'
import Home from "../pages/Home"
import Events from "../pages/Events"
import Login from "../pages/Login"
import {UserContext} from "../contexts/UserContext";
import AuthService from "../services/auth-service"

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const AppRouter = ({serverUrl}) => {
  const [user, setUser] = useState(AuthService.getCurrentUser(serverUrl));
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  const doLogin = userData => {
    AuthService.login({serverUrl, userData})
    .then(user => {
      history.push("/home");
      window.location.reload()
    })
    .catch(error => {
      setError(error)
    });
  };

  const getJWT = () => {
    try {
      const user = localStorage.getItem('user');
      const json = JSON.parse(user);
      if (user && json) {
        setUser(json);
      } else {
        // callback(null)
      }
    } catch (e) {
      console.error("Kein token gefunden")
    }
  };

  useEffect(
      getJWT
      , []);

  //TODO use authservice for login verification

  return (
      <UserContext.Provider value={providerValue}>
        <Router>
          <Login path="/login" doLogin={doLogin}>Login</Login>
          <Home path="/home"/>
          {/*<Route path="/login" component={Login} doLogin={doLogin}/>*/}
          {/*<Route path="/events" component={Events}/>*/}
          {/*<Route path="/" exact component={Home}>*/}
          {/*</Route>*/}
        </Router>
      </UserContext.Provider>
  );

};
export default AppRouter;