import React, {useContext, useState} from 'react';
import Layout from '../components/layout'
import {Input} from "../components/inputs";
import {UserContext} from "../contexts/UserContext";
import authService from "../services/auth-service";
import history from "../history";
import {navigate} from "@reach/router";
import {Button} from "../components/buttons";
import {
  CenteredSectionContainer,
  LoginFormContainer
} from "../components/container";

const Login = ({serverUrl}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});
  const {user, setUser} = useContext(UserContext);
  const handleChange = evt => {
    setLoginUser({...loginUser, [evt.target.name]: evt.target.value});
  };

  const doLogin = () => {
    authService.login(serverUrl, loginUser)
    .then(user => {
      if(user){
        setUser(user);
        navigate("/events")
      }
    })
    .catch(error => {
      // setError(error)
    });
  };

  const renderLogin = () => <Layout>
    <CenteredSectionContainer>
      <LoginFormContainer>
        <form>
          <Input type="text"
                 name="name"
                 placeholder="Name"
                 onChange={handleChange}/>
          <Input type="password"
                 name="password"
                 placeholder="Passwort"
                 onChange={handleChange}/>
          <Button text="Einloggen"
                  color="yellow"
                  onClick={doLogin}
          />
        </form>
      </LoginFormContainer>
    </CenteredSectionContainer>

  </Layout>;
  return (renderLogin())
};
export default Login