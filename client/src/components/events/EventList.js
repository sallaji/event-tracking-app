import React from "react";
import _ from 'lodash'
import EventListItem from "./EventListItem";

const EventList = ({events}) => {
  const renderEventListItems = () =>
    _.map(events, event =>
      <EventListItem event={event} key={event.id}/>
    )
  ;
  return(renderEventListItems())
};

export default EventList;