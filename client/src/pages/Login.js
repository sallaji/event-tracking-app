import React, {useContext, useEffect, useState} from 'react';
import Layout from '../components/layout'
import {Input} from "../components/inputs";
import {UserContext} from "../contexts/UserContext";
import authService from "../services/auth-service";
import history from "../history";
import UseAnimations from "react-useanimations";
import alertOctagon from 'react-useanimations/lib/alertOctagon'
import theme from "../styles/theme";
import {Button} from "../components/buttons";
import {
  CenteredSectionContainer,
  LoginFormContainer
} from "../components/container";


const Login = ({serverUrl}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const {user, setUser} = useContext(UserContext);
  const handleChange = evt => {
    setError(false);
    setMessage('');
    setLoginUser({...loginUser, [evt.target.name]: evt.target.value});
  };

  const doLogin = () => {
    authService.login(serverUrl, loginUser)
    .then(user => {
      if (user) {
        setUser(user);
        history.push("/events")
      }
    })
    .catch(error => {
      setLoginUser({...loginUser, password: ''});
      setError(true);
      setMessage(error.message)
    });
  };
  useEffect(() => {
    setDisabled(!(loginUser.name && loginUser.password));

  }, [loginUser]);

  const renderLogin = () => <Layout>
    <CenteredSectionContainer>
      <LoginFormContainer>
        <div className="login-failed-animation-and-text">
          {
            error && <div>
              <UseAnimations animation={alertOctagon}
                             size={56}
                             strokeColor={theme.palette.error.main}
                             wrapperStyle={{}}/>
              <h3>{message}</h3>
            </div>
          }
        </div>
          <Input type="text"
                 name="name"
                 value={loginUser.name}
                 label="Name"
                 error={error}
                 onChange={handleChange}
                 className="form-controller"/>
          <Input type="password"
                 name="password"
                 value={loginUser.password}
                 label="Passwort"
                 error={error}
                 onChange={handleChange}
                 className="form-controller"/>
          <Button text="Einloggen"
                  variant="contained"
                  color="secondary"
                  onClick={doLogin}
                  disabled={disabled}/>
      </LoginFormContainer>
    </CenteredSectionContainer>

  </Layout>;
  return (renderLogin())
};
export default Login