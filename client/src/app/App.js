import React, {useState, useEffect} from 'react';
// import logo from '../logo.svg';
import Header from "./Header";
import EventContainer from "../components/events/EventContainer";
import './app.css'
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

  const renderHeader = () =>
      config? <Header/>:null;
  const renderMessage = () =>
      error? <Message message={message}/>:null;

  const renderEventContainer = config =>
      config? <EventContainer serverUrl={`${config.url}/events`}/>: null;
  return <div className="container">
    {renderHeader()}
    {renderEventContainer(config)}
    {renderMessage()}
  </div>
};

export default App;
