import React, {useContext, useEffect, useState} from 'react'
import Layout from "../components/layout";
import {UserContext} from "../contexts/UserContext";
import _ from 'lodash'
import eventService from "../services/event-service";
import EventList from "../components/events/EventList";
import EventToolbar from "../components/events/EventToolbar";

const Events = ({serverUrl}) => {

  const [events, setEvents] = useState(null);
  const {user, setUser} = useContext(UserContext);
  const loadEvents = () => {
    if (user) {
      eventService.getAll(serverUrl)
      .then(events => {
        setEvents(events)
      })
    }
  };
  useEffect(loadEvents, [user]);
  const renderEventList = () => <Layout>
    <EventToolbar/>
    <EventList events={events}/>
  </Layout>;
  return (renderEventList())
};
export default Events