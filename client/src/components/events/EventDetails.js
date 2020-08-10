import React from 'react'
import {EventDialog} from "../dialogs";
import EventForm from "../forms/EventForm";
import styled from "styled-components";

const EventDetailsComponent = styled.div`
cursor: auto;
`;
const EventDetails = ({close, event}) => {

  return (
      <EventDetailsComponent>
        <EventDialog title="Eventdaten" close={close}>
          <EventForm event={event}/>
        </EventDialog>
      </EventDetailsComponent>)
};
export default EventDetails;