import React from "react";
import _ from 'lodash'
import EventListItem from "./EventListItem";
import styled from "styled-components";

const EventListComponent = styled.div`

`;
const EventList = ({events}) => {
  const renderEventListItems = () =>
      <EventListComponent>
        {
          _.map(events, event =>
              <EventListItem event={event} key={event._id}/>
          )
        }
      </EventListComponent>;
  return (renderEventListItems())
};

export default EventList;