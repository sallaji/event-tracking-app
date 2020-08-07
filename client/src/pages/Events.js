import React, {useContext, useEffect, useState} from 'react'
import Layout from "../components/layout";
import {UserContext} from "../contexts/UserContext";
import eventService from "../services/event-service";
import EventList from "../components/events/EventList";
import EventToolbar from "../components/events/EventToolbar";
import history from "../history";
import {useLocation} from "@reach/router";
import {parse} from "qs"

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
  useEffect(loadEvents, [user, queryStringParams]);

  const query = (updatedQueryObject) => {
    let queryString = '?';
    let keys = Object.keys(updatedQueryObject);
    keys.forEach((key, index) => {
      if (updatedQueryObject[key] && updatedQueryObject[key] !== '') {
        queryString = queryString + `${key}=${updatedQueryObject[key]}`;
        queryString = queryString + (index < keys.length - 1 ? '&' : '');
      }
    });
    history.push({pathname: "/events", search: queryString});
    setQueryStringParams(queryString)
  };

  const parseQuery = () => parse(location.search, {ignoreQueryPrefix: true});

  const renderEventList = () => <Layout>
    <EventToolbar query={query} queryObject={parseQuery()}/>
    <EventList events={events}/>
  </Layout>;
  return (renderEventList())
};
export default Events