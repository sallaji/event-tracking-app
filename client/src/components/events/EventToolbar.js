import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Input} from "../inputs";
import {AddCircle} from "@styled-icons/ionicons-solid";
import {Search} from '@styled-icons/heroicons-outline'
import history from "../../history";
import {Button} from "../buttons";
import {Icon} from "../icons";
import {Dropdown, DropdownItem} from "../dropdowns";
import _ from 'lodash'

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

const EventToolbar = ({search, filter, queryObject: qobj}) => {

  const [queryObject, setQueryObject] = useState(qobj);
  const [disabled, setDisabled] = useState(true);
  const handleChange = (e) => {
    let value = e.target.value;
    if (value.length >= 2) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    updateQueryObject({search: value});
  };
  const doFilter = e => {
    //TODO: updates only after second onclick!!!!
    updateQueryObject({filter: e.target.name});
    (filter || _.identity)(queryObject);
  };
  const doSearch = () => {
    (search || _.identity)(queryObject);
  };


  const updateQueryObject = (value) => {
    setQueryObject({...queryObject, ...value})
  };
  return <EventToolbarComponent>
    <div className="event-search">
      <Input margin="0"
             name="search"
             onChange={handleChange}
             placeholder="Eventsuche"
             value={queryObject.search}
             type="text"/>
      <Button text="Suchen"
              type="submit"
              color="white"
              width="100px"
              disabled={disabled}
              onClick={doSearch}>
        <Icon><Search/></Icon></Button>
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
    <Dropdown text={`Sortiert Nach ${queryObject.filter || "Datum"}`}>
      <DropdownItem text="Datum" name="date" onClick={doFilter}/>
      <DropdownItem text="Sparte" name="sparte" onClick={doFilter}/>
      <DropdownItem text="A-Z" name="az" onClick={doFilter}/>
    </Dropdown>
  </EventToolbarComponent>;
};

export default EventToolbar;
