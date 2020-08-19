import React from "react";
import _ from 'lodash'
import EventListItem from "./EventListItem";
import styled from "styled-components";

const EventListComponent = styled.div`
`;
const EventList = ({events, getEvent, createEvent, updateEvent,
  deleteEvent}) => {

  const renderEventListItems = () =>
      <EventListComponent>
        {
          _.map(events, (event, index) =>
              // (index === 0) ?
                  <EventListItem event={event} getEvent={getEvent}
                                             key={index}/>
                                             // : null
          )
        }
      </EventListComponent>;
  return (renderEventListItems())
};

export default EventList;