import React from "react";
import styled from "styled-components";

const EventListItemComponent = styled.div`
width:97%;
display: grid;
grid-template-columns: 20% 80%;
font-size: 1.4rem;
padding: 1rem;
background-image: linear-gradient(to bottom right, #f3f3f3, #ffffff);
margin: 0.25rem auto;
border: 1px solid #f0f0f0;
//overflow: hidden;
position: relative;
transform-origin: center;
transition: 0.4s;
cursor: pointer;
:hover{
background-image: linear-gradient(to bottom right, #f5f5f5, #f6f6f6);
transform: scale(1.005);
box-shadow: 5px 5px 20px #cecece ;
border: 1px solid #c6c6c6;
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
const EventListItem = ({event}) => {
  return (<EventListItemComponent>

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
  </EventListItemComponent>)
};

export default EventListItem