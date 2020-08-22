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

  const getEvent = (id) => {
    if (user) {
      eventService.getEvent(serverUrl, id)
      .then(event => setEvents(
          _.map(events, evt => evt.id === event.id ? event : evt)))
      .catch(error => console.error(error))
    }
  };

  const create = event => {
    console.log("from createEvent")
  };

  const update = event => {
    console.log("from updateEvent");
    console.log(event)
  };

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
//TODO: hacer generico
  const parseQuery = () => parse(location.search, {ignoreQueryPrefix: true});

  const renderEventList = () => <Layout>
    <EventToolbar query={query} queryObject={parseQuery()}/>
    <EventList events={events}
               getEvent={getEvent}
               create={create}
               update={update}
               _delete={_delete}
               loading={loading}
    />
  </Layout>;
  return (renderEventList())
};
export default Events