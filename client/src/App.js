import React, {useEffect, useState} from 'react'
import Router from './services/router';
import doFetch from "./network/NetworkService";
import {ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

const App = () => {
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    doFetch({
      url: 'application.json',
      dataFn: setConfig,
      errorFn: setError,
      messageFn: setMessage,
      errorText: 'Konfiguationsfehler'
    })
  }, []);
  const renderRouter = config => config ? <Router
      serverUrl={`${config.url}`}/> : null;
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {renderRouter(config)}
      </ThemeProvider>

  );
};

export default App;