import React, {useContext, useState} from 'react';
import _ from 'lodash';

import Layout from '../components/layout'
import {
  Container,
  FormControlLabel,
  InputLabel,
  FormControl,
  Dialog,
  Button,
  TextField,
  Select,
  Checkbox
} from '@material-ui/core'
import {UserContext} from "../contexts/UserContext";
import doFetch from "../network/NetworkUtil";


const Login = ({doLogin}) => {
  const [loginUser, setLoginUser] = useState({name: '', password: ''});

  const handleChange = evt => setLoginUser(
      {...loginUser, [evt.target.name]: evt.target.value});
  const onAction = (loginUser, actionFn) => {
    (actionFn || _.identity)(loginUser);
  };
  return (<Layout>
    <form>
      <input type="text" name="name" onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
      <input type="button" onClick={_.partial(onAction, loginUser, doLogin)}/>
    </form>
  </Layout>)
  // const {user, setUser} = useContext(UserContext);
  // const {name, setName} = useState(null);
  // const {password, setPassword} = useState(null);
  // const {error, setError} = useState(false);
  // const {message, setMessage} = useState('');
  // const {loading, setLoading} = useState(false);
  //

  // const doLogin = evt => {
  //   console.log(evt.target.name);
  //   doFetch({
  //     url: '/',
  //     requestObject: {
  //       method: 'POST',
  //       body: JSON.stringify({}), ...headers
  //     },
  //     dataFn: setUser(user),
  //     errorFn: setError,
  //     messageFn: setMessage,
  //     loadingFn: setLoading,
  //     errorText: 'Benutzer nicht gefunden'
  //   })
  // };

  // return (<Layout>
  //     <Container maxWidth="xs">
  //       <form onSubmit={doLogin}>
  //         <TextField
  //             id="name"
  //             label="Name"
  //             type="text"
  //             value={name}
  //             name="name"
  //             onChange={e => {
  //               setName(e.target.value)
  //             }}
  //             fullWidth
  //             required/>
  //         <TextField
  //             id="password"
  //             label="Passwort"
  //             type="password"
  //             value={password}
  //             onChange={e => setPassword(e.target.value)}
  //             fullWidth
  //             required/>
  //         <FormControlLabel
  //             control={<Checkbox value="remember" color="primary"/>}
  //             label="Remember me"
  //         />
  //         <Button color="primary" fullWidth variant="contained">d</Button>
  //       </form>
  //     </Container>
  //     </Layout>
  // )
};
export default Login