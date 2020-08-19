import React, {useEffect, useState} from "react";
import styled from "styled-components";
import _ from 'lodash'
import EventDetails from "./EventDetails";
import theme from "../../styles/theme";
import Moment from 'react-moment'

const EventListItemComponent = styled.div`

background-image: linear-gradient(to bottom right, #f0f0f0, #ffffff);
//margin: 0.25rem auto;
border: 1px solid #f0f0f0;
transition: 0.4s;
cursor: pointer;
:hover{
background-image: linear-gradient(to bottom right, 
${theme.palette.primary.main}, ${theme.palette.primary.light});
color: white;
transition: 0.4s;
z-index: 2;
}
.listItemWrapper {
font-size: 0.875rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 2rem;
}
.eventName{
font-size: 1rem;
font-weight: 600;
}
`;
const EventListItem = ({event, getEvent}) => {
  //TODO CAM
  const [showDialog, setShowDialog] = useState(false);

  const open = () => setShowDialog(true);

  //TODO CAM
  const close = () => setShowDialog(false);

  const onAction = (id, getEvent) => {
    (getEvent || _.identity)(id);
    open()
  };
  return (<EventListItemComponent>
    <div className="listItemWrapper"
         onClick={_.partial(onAction, event.id, getEvent)}>
      <div className="eventListItemDetails">
        <div className="eventName">
          {event.name}
        </div>
        <div className="eventListItemDate">
          <div>
            <Moment format='MMM D - LT (dddd)' locale="de-ch">
              {event.date}
            </Moment>
          </div>
        </div>
        <div>
          {event.user.name}
        </div>
      </div>
    </div>

    {/*<div onClick={_.partial(onAction, event.id, getEvent)}*/}
    {/*     className="event-description">*/}
    {/*  <div className="date-and-crew">*/}
    {/*    <Typography variant="h6">{event.user.name}</Typography>*/}
    {/*    <div>*/}
    {/*    </div>*/}
    {/*    <div>*/}
    {/*      <small>*/}
    {/*        {new Intl.DateTimeFormat("de-CH", {*/}
    {/*          year: "numeric",*/}
    {/*          month: "numeric",*/}
    {/*          day: "2-digit"*/}
    {/*        }).format(new Date(event.date))}*/}
    {/*      </small>*/}
    {/*    </div>*/}

    {/*  </div>*/}
    {/*  <div className="description">*/}
    {/*    {event.name}*/}
    {/*  </div>*/}
    {/*</div>*/}
    {
      <EventDetails close={close} event={event} open={showDialog}
                    text="bearbeiten"/>
    }

  </EventListItemComponent>)
};

export default EventListItem