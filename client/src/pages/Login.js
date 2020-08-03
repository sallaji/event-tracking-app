import React, {useContext, useState} from 'react';
import Layout from '../components/layout'
import {Input} from "../components/inputs";
import {UserContext} from "../contexts/UserContext";
import AuthService from "../services/auth-service";
import history from "../history";

const Login = ({serverUrl}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});
  const {user, setUser} = useContext(UserContext);
  const handleChange = evt => {
    setLoginUser({...loginUser, [evt.target.name]: evt.target.value});
  };

  const doLogin = () => {
    console.log(loginUser);
    AuthService.login(serverUrl, loginUser)
    .then(user => {
      setUser(user);
      history.push("/home");
      // window.location.reload()
    })
    .catch(error => {
      // setError(error)
    });
  };
  const renderLogin = () => <Layout>
    <form>
      <Input type="text" name="name" placeholder="Name"
             onChange={handleChange}/>
      <Input type="password" name="password" placeholder="Passwort"
             onChange={handleChange}/>

      <input type="button" onClick={doLogin} value="login"/>
    </form>
  </Layout>;
  return (renderLogin())
};
export default Login