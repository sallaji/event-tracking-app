import React from "react";
import styled from "styled-components";

const EventListItemComponent = styled.div`

`;
const EventListItem = ({event, key}) => {
  return (<EventListItemComponent>
    <h1>
      {event.user._id}
    </h1>
  </EventListItemComponent>)
};

export default EventListItem