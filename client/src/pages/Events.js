import React, {useContext, useEffect, useState} from 'react'
import Layout from "../components/layout";
import {UserContext} from "../contexts/UserContext";
import eventService from "../services/event-service";
import EventList from "../components/events/EventList";
import EventToolbar from "../components/events/EventToolbar";
import history from "../history";
import {useLocation} from 'react-router-dom';
import {parse} from "qs"
import _ from 'lodash'

const Events = ({serverUrl}) => {

  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const {user, setUser} = useContext(UserContext);
  const location = useLocation();
  const [queryStringParams, setQueryStringParams] = useState(location.search);

  const loadEvents = () => {
    if (user) {
      eventService.getAll({serverUrl, queryStringParams})
      .then(events => {
        setEvents(events);
        setLoading(true)
      })
    }
  };

  useEffect(
      loadEvents
      , [user, queryStringParams]
  );

  let keysPressed = {};

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      keysPressed[event.key] = true;
      // if(keysPressed[''])
      console.log(event.key)
    });

    return () =>
        window.removeEventListener('keyup', (event) => {
          delete keysPressed[event.key]
        });
  }, []);

  const getEvent = (id) => {
    if (user) {
      eventService.get(serverUrl, id)
      .then(event => setEvents(
          _.map(events, evt => evt.id === event.id ? event : evt)))
      .catch(error => console.error(error))
    }
  };

  const create = (event => {
    if (user) {
      eventService.create(serverUrl, event)
      .then(event => setEvents((_.concat(events, event)),
      ))
      .catch(error => console.error(error))
    }
  });

  const update = (event => {
    if (user) {
      eventService.update(serverUrl, event)
      .then(event => setEvents((
          _.map(events, evt => evt.id === event.id ? event : evt)
      )))
      .catch(error => console.error(error))
    }
  });

  const _delete = event => {
    console.log("from deleteEvent")
  };

  const query = (queryString) => {
    if (queryString !== queryStringParams) {
      setLoading(false);
      history.push({pathname: "/events", search: queryString});
      setQueryStringParams(queryString)
    }
  };

  const parseQuery = () => parse(location.search, {ignoreQueryPrefix: true});

  const renderEventList = () => <Layout>
    <EventToolbar query={query}
                  create={create}
                  queryObject={parseQuery()}/>
    <EventList events={events}
               getEvent={getEvent}
               update={update}
               _delete={_delete}
               loading={loading}
    />
  </Layout>;
  return (renderEventList())
};
export default Events