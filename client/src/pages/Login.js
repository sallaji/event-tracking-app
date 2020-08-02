import React, {useContext, useState} from 'react';

import Layout from '../components/layout'
import {UserContext} from "../contexts/UserContext";
import AuthService from "../services/auth-service";
import history from "../history";

const Login = ({serverUrl}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});
  const {user, setUser} = useContext(UserContext);
  const handleChange = evt => setLoginUser(
      {...loginUser, [evt.target.name]: evt.target.value});

  const doLogin = () => {
    AuthService.login(serverUrl, loginUser)
    .then(user => {
      setUser(user);
      history.push("/home");
      window.location.reload()
    })
    .catch(error => {
      // setError(error)
    });
  };
  const renderLogin = () => <Layout>
    <form>
      <input type="text" name="name" onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
      <input type="button" onClick={doLogin}/>
    </form>
  </Layout>;
  return (renderLogin())
};
export default Login