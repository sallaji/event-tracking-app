import React, {useEffect, useMemo, useReducer, useState} from 'react';
// import {Router, Route} from 'react-router-dom'
import {Router} from '@reach/router'
import history from '../history'
import Home from "../pages/Home"
import Events from "../pages/Events"
import Login from "../pages/Login"
import {UserContext} from "../contexts/UserContext";
import doFetch from "../network/NetworkUtil";
import AuthService from "../services/auth-service"

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const AppRouter = ({serverUrl}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  const doLogin = userData => {
    AuthService.login({serverUrl, userData});
  };
  // const doLogin = userData => {
  //   doFetch(
  //       {
  //         url: `${serverUrl}/login`,
  //         requestObject: {
  //           method: 'POST',
  //           body: JSON.stringify(userData), ...headers
  //         },
  //         dataFn: user => setUser(user),
  //         errorFn: setError,
  //         messageFn: setMessage,
  //         loadingFn: setLoading,
  //         errorText: 'Kein nutzer gefunden'
  //       }
  //   );
  //
  // };
  //
  // useEffect(() => {
  //   doFetch(
  //       {
  //         url: `${serverUrl}/login`,
  //         dataFn: user => setUser(user),
  //         errorFn: setError,
  //         messageFn: setMessage,
  //         loadingFn: setLoading,
  //         errorText: 'Kein nutzer gefunden'
  //       }
  //   )
  // }, []);

  return (
      <UserContext.Provider value={providerValue}>
        <Router>
          <Login path="/login" doLogin={doLogin}>Login</Login>
          {/*<Route path="/login" component={Login} doLogin={doLogin}/>*/}
          {/*<Route path="/events" component={Events}/>*/}
          {/*<Route path="/" exact component={Home}>*/}
          {/*</Route>*/}
        </Router>
      </UserContext.Provider>
  );

};
export default AppRouter;