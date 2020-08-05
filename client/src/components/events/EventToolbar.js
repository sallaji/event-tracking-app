import React from 'react'
import styled from "styled-components";
import {Input} from "../inputs";
import {AddCircle} from "@styled-icons/ionicons-solid";

import {Button} from "../buttons";
import {Icon} from "../icons";
import {Dropdown, DropdownItem} from "../dropdowns";

const EventToolbarComponent = styled.div`
display: grid;
grid-template-columns: 70% 30%;
grid-template-rows: auto auto;
width: 100%;

.event-search{
display: flex;
justify-content: center;
align-items: center;
}
.add-event{
justify-self: right;
}
`;

const EventToolbar = ({search}) => <EventToolbarComponent>
  <div className="event-search">
    <Input margin="0"
           placeholder="Eventsuche"/>
    <Button text="Suchen"
            color="pink"
            width="100px">
      <Icon><AddCircle/></Icon></Button>
  </div>
  <div className="add-event">
    <Button text="Event Hinzufügen"
            color="pink"
            width="200px">
      <Icon>
        <AddCircle/>
      </Icon>
    </Button>
  </div>
<Dropdown text="Filter">
  <DropdownItem text="Datum"/>
  <DropdownItem text="Sparte"/>
  <DropdownItem text="A-Z"/>
</Dropdown>
</EventToolbarComponent>;

export default EventToolbar;
