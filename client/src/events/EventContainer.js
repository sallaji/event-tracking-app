import React,{useEffect, useState} from "react";
import doFetch from "../network/NetworkUtil";
import Message from '../app/Message'
import Loader from '../app/Loader'
import EventTable from './EventTable'
const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const EventContainer = ({serverUrl}) => {
  let [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const readAll = () => {
    doFetch({
      url: serverUrl,
      dataFn: setEvents,
      errorFn: setError,
      messageFn: setMessage,
      loadingFn: setLoading,
      errorText: 'Events Nicht Gefunden'
    })
  };
  useEffect(readAll, []);
  const renderMessage = () => error ? <Message message={message}/> : null;
  const renderEventTable = (events) =>
      loading ? <Loader/> : <EventTable events={events}/>;
  return <div>
    {renderMessage()}
    {renderEventTable(events)}
  </div>

};
export default EventContainer