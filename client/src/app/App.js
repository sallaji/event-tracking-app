import React, {useState, useEffect} from 'react';
// import logo from '../logo.svg';
import './App.css';
import EventContainer from "../events/EventContainer";
import {Container} from 'reactstrap'
import doFetch from "../network/NetworkUtil";

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
      errorText: 'Konfigurationsfehler'
    })
  }, []);

  const renderEventContainer = config =>
      config? <EventContainer/>: null
};

export default App;
