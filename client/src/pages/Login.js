import React, {useContext, useEffect, useState} from 'react';
import Layout from '../components/layout'
import {Input} from "../components/inputs";
import {UserContext} from "../contexts/UserContext";
import authService from "../services/auth-service";
import history from "../history";
import UseAnimations from "react-useanimations";
import alertOctagon from 'react-useanimations/lib/alertOctagon'

import {navigate} from "@reach/router";
import {Button} from "../components/buttons";
import {
  CenteredSectionContainer,
  LoginFormContainer
} from "../components/container";

const Login = ({serverUrl}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const {user, setUser} = useContext(UserContext);
  const handleChange = evt => {
    setError(null);
    setLoginUser({...loginUser, [evt.target.name]: evt.target.value});
  };

  const doLogin = () => {
    // if (!disabled) {
    authService.login(serverUrl, loginUser)
    .then(user => {
      if (user) {
        setUser(user);
        navigate("/events")
      }
    })
    .catch(error => {
      setLoginUser({...loginUser, password: ''});
      setError(error)
    });
    // }
  };
  useEffect(() => {
    setDisabled(!(loginUser.name && loginUser.password));

  }, [loginUser]);

  const renderLogin = () => <Layout>
    <CenteredSectionContainer>
      <LoginFormContainer>
        <div
            style={{
              height: "76px",
              alignItems: "center",
              justifyContent: "center",
              display: "grid",
            }}>

          {
            error && <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <UseAnimations animation={alertOctagon}
                             size={56}
                             strokeColor={"var(--color-red)"}
                             wrapperStyle={{
                               margin: "auto",
                             }}/>
              <h3 style={{
                color: "var(--color-red)",
                textAlign: "center"
              }}>{error.message}</h3>
            </div>
          }
        </div>


        <form>
          <Input type="text"
                 name="name"
                 value={loginUser.name}
                 placeholder="Name"
                 margin="1.50rem 0rem"
                 error={error}
                 onFocus={e=> e.target.select()}
                 onChange={handleChange}/>
          <Input type="password"
                 name="password"
                 value={loginUser.password}
                 placeholder="Passwort"
                 margin="1.50rem 0rem"
                 error={error}
                 onFocus={e=> e.target.select()}
                 onChange={handleChange}/>
          <Button text="Einloggen"
                  color="yellow"
                  onClick={doLogin}
                  disabled={disabled}

          />
        </form>
      </LoginFormContainer>
    </CenteredSectionContainer>

  </Layout>;
  return (renderLogin())
};
export default Login