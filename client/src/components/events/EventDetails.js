import React from 'react'
import eventService from "../../services/event-service";
import {EventDialog} from "../dialogs";
import EventForm from "../forms/EventForm";
import styled from "styled-components";

const EventDetailsComponent = styled.div`
cursor: auto;
`;
const EventDetails = ({close, event}) => {

  return (
      <EventDetailsComponent>
        <EventDialog close={close}>
          <EventForm event={event}/>
        </EventDialog>
      </EventDetailsComponent>)
};
export default EventDetails;