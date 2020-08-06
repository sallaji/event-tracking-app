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
  useEffect(loadEvents, [user]);

  // const updateQuery = (queryObj) => {
  //   //   let queryParams = parseQuery();
  //   //   queryParams = {...queryParams, ...queryObj};
  //   //   console.log(queryParams);
  //   //   let queryString = '';
  //   //   let keys = Object.keys(queryParams);
  //   //   keys.forEach((key, index) => {
  //   //     queryString = queryString + `${key}=${queryParams[key]}`;
  //   //     queryString = queryString + (index < keys.length -1 ? '&' : '');
  //   //   });
  //   //   history.push({
  //   //     search: queryString
  //   //   });
  //   //   setQueryStringParams(location.search)
  //   // };
  const updateQuery = (updatedQueryObject) => {
    // setQueryObject({...queryObject, ...updatedQuery});
    let keys = Object.keys(updatedQueryObject);
    let queryString = '';
    keys.forEach((key, index) => {
      if (updatedQueryObject[key] && updatedQueryObject[key] !== '') {
        queryString = queryString + `${key}=${updatedQueryObject[key]}`;
        queryString = queryString + (index < keys.length - 1 ? '&' : '');
      }
    });
    history.push({
      search: queryString
    });
    setQueryStringParams(location.search)
  };

  const parseQuery = () => parse(location.search, {ignoreQueryPrefix: true});

  const search = (queryObject) => {
    updateQuery(queryObject);
  };
  const filter = (queryObject) => {
    updateQuery(queryObject);
  };

  const renderEventList = () => <Layout>
    <EventToolbar search={search} filter={filter} queryObject={parseQuery()}/>
    <EventList events={events}/>
  </Layout>;
  return (renderEventList())
};
export default Events