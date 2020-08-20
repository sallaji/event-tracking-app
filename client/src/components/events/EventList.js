import React, {useState} from "react";
import _ from 'lodash'
import EventListItem from "./EventListItem";
import styled from "styled-components";
import {Loader} from '../loaders/index'
const EventListComponent = styled.div`
`;
const EventList = ({events, getEvent, createEvent, updateEvent,
  deleteEvent, loading}) => {

  const renderEventListItems = () =>
      !loading? <Loader/>:
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