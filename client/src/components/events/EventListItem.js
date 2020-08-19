import React, {useEffect, useState} from "react";
import styled from "styled-components";
import _ from 'lodash'
import EventDetails from "./EventDetails";
import theme from "../../styles/theme";
import Moment from 'react-moment'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete"

const EventListItemComponent = styled.div`
position:relative;
background-image: linear-gradient(to bottom right, #f0f0f0, #ffffff);
border: 1px solid #f0f0f0;
transition: 0.4s;
cursor: pointer;
:hover{
background-image: linear-gradient(to bottom right, 
${theme.palette.primary.main}, ${theme.palette.primary.light});
color: white;
transition: 0.4s;
z-index: 2;
& .deleteIcon {
color: ${theme.palette.warning.main}
}
}
.listItemWrapper {
font-size: 0.875rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 1rem;
}
.eventName{
font-size: 1rem;
font-weight: 600;
}
.dialogTrigger{
position:absolute;
border: 1px solid red;
width:100%;
top:0;
left:0;
right:0;
bottom:0;
}
.eventListItemDetails{
flex:1
}
.deleteIcon{
flex:1;
padding: 1.5rem;
}
.deleteIcon{
& :hover{
color:red;
transition: 0.4s
}
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
    <div className="listItemWrapper">
      {/*<div className="dialogTrigger"></div>*/}
      <div className="eventListItemDetails"
           onClick={_.partial(onAction, event.id, getEvent)}>
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
      <div>
        <IconButton className="deleteIcon">
          <DeleteIcon/>
        </IconButton>
      </div>
    </div>
    {
      <EventDetails close={close} event={event} open={showDialog}
                    text="bearbeiten"/>
    }

  </EventListItemComponent>)
};

export default EventListItem