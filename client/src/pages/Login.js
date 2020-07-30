import React, {useContext, useEffect, useState} from 'react';
import _ from 'lodash';

import Layout from '../components/layout'
import {UserContext} from "../contexts/UserContext";
import {Redirect} from "@reach/router";

const Login = ({doLogin}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});
  const {user, setUser} = useContext(UserContext);
  const handleChange = evt => setLoginUser(
      {...loginUser, [evt.target.name]: evt.target.value});
  const onAction = (loginUser, actionFn) => {
    (actionFn || _.identity)(loginUser);
  };

  useEffect(() => console.log(user));
  // const renderLogin = () => user ? <Redirect to="/login"/> : <Layout>
    const renderLogin = () => <Layout>
    <form>
      <input type="text" name="name" onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
      <input type="button" onClick={_.partial(onAction, loginUser, doLogin)}/>
    </form>
  </Layout>;
  return (renderLogin())
};
export default Login