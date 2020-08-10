import React, {useState} from "react";
import styled from "styled-components";
import _ from 'lodash'
import EventDetails from "./EventDetails";

const EventListItemComponent = styled.div`
width:97%;
display: grid;
font-size: 1.4rem;
background-image: linear-gradient(to bottom right, #f0f0f0, #ffffff);
margin: 0.25rem auto;
border: 1px solid #f0f0f0;
transition: 0.4s;
cursor: pointer;
.event-description{
padding: 1rem;
}
.event-description:hover{
//background-image: linear-gradient(to bottom right, #f5f5f5, #f6f6f6);
background-image: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover));
color: white;
//border: 1px solid #c6c6c6;
transition: 0.4s;
z-index: 2;
}
.date-and-crew{
text-align: left;
}
.date-and-crew small{
color: #fb0086;
font-weight: 600;
}
.description{
text-align: left}

.description, .date-and-crew {
align-self: center;
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
    <div onClick={_.partial(onAction, event.id, getEvent)}
         className="event-description">
      <div className="date-and-crew">
        <div>
          <small>
            {new Intl.DateTimeFormat("de-CH", {
              year: "numeric",
              month: "numeric",
              day: "2-digit"
            }).format(new Date(event.date))}
          </small>
        </div>
        <div>
          {event.user.name}
        </div>
      </div>
      <div className="description">
        {event.name}
      </div>
    </div>
    {!showDialog &&
    <EventDetails event={event} close={close}/>
    }
  </EventListItemComponent>)

};

export default EventListItem