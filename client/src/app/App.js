import React, {useState, useEffect} from 'react';
// import logo from '../logo.svg';
import './App.css';
import EventContainer from "../events/EventContainer";
import {Container} from 'reactstrap'
import doFetch from "../network/NetworkUtil";
import Message from "./Message";

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

  const renderMessage = () =>
      error? <Message message={message}/>:null;

  const renderEventContainer = config =>
      config? <EventContainer serverUrl={`${config.url}/events`}/>: null;
  return <Container>
    {renderEventContainer(config)}
    {renderMessage()}
  </Container>
};

export default App;
