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
import Datepicker from "../components/inputs/DatepickerInput";

const Events = ({serverUrl}) => {

  const [events, setEvents] = useState(null);
  const {user, setUser} = useContext(UserContext);
  const location = useLocation();
  const [queryStringParams, setQueryStringParams] = useState(location.search);
  const loadEvents = () => {
    if (user) {
      eventService.getAll(serverUrl, queryStringParams)
      .then(events => {
        setEvents(events)
      })
    }
  };
  const getEvent = (id) => {
    if (user) {
      eventService.getEvent(serverUrl, id)
      .then(event => setEvents(
          _.map(events, evt => evt.id === event.id ? event : evt)))
      .catch(error => console.error(error))
    }
  };

  const createEvent = event => {
    console.log("from createEvent")
  };

  const updateEvent = event => {
    console.log("from updateEvent")
  };

  const deleteEvent = event => {
    console.log("from deleteEvent")
  };

  useEffect(loadEvents, [user, queryStringParams]);

  const query = (queryString) => {

    history.push({pathname: "/events", search: queryString});
    setQueryStringParams(queryString)
  };

  const parseQuery = () => parse(location.search, {ignoreQueryPrefix: true});

  const renderEventList = () => <Layout>
    <EventToolbar query={query} queryObject={parseQuery()}/>
    <EventList events={events}
               getEvent={getEvent}
               createEvent={createEvent}
               updateEvent={updateEvent}
               deleteEvent={deleteEvent}
    />
  </Layout>;
  return (renderEventList())
};
export default Events