import {useEffect, useState} from "react";
import doFetch from "../network/NetworkUtil";

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
      errorFn, setError,
      messageFn: setMessage,
      loadingFn: setLoading,
      errorText: 'Events Nicht Gefunden'
    })
  };
  useEffect(readAll, []);
  const renderMessage = () => error ? <Message message={message}/> : null;
  const renderEventTable = (events) =>
      loading? <Loader /> : <EventTable events={events}/>
      //TODO Terminar de crear los componentes faltantes: Message, Loader,
      // EventTable, concrete errorFn y probar el fetch.. :)


};
export default EventContainer