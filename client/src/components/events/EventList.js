import React, {useState} from "react";
import _ from 'lodash'
import EventListItem from "./EventListItem";
import styled from "styled-components";
import {Loader} from '../loaders/index'

const EventList = ({
  events,
  getEvent,
  create,
  update,
  _delete,
  loading
}) => {

  const renderEventListItems = () =>
      !loading ? <Loader/> :
          <div>
            {
              _.map(events, (event, index) =>
                      // (index === 0) ?
                      <EventListItem event={event}
                                     getEvent={getEvent}
                                     key={index}
                                     update={update}/>
                  // : null
              )
            }
          </div>;
  return (renderEventListItems())
};

export default EventList;