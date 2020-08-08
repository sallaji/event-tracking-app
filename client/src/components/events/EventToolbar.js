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
grid-template-columns: auto auto;
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
.event-sort{
display: flex;
justify-content: center;
align-items: center;
}
`;

const EventToolbar = ({query, queryObject: qobj}) => {

  const [queryObject, setQueryObject] = useState(qobj);
  const [raiseQuery, setRaiseQuery] = useState(false);
  const [disabled, setDisabled] = useState(!qobj.search);
  // const [ascending, setAscending] = useState(qobj.ascending);
  const [searchDelayTime, setSearchDelayTime] = useState(null);
  const handleInputValueChangeAndSearchAfterDelay = async (e) => {
    clearTimeout(searchDelayTime);
    let value = e.target.value;
    if (value.length !== 0) {
      setDisabled(false)
    } else {
      setQueryObject(_.omit(queryObject, 'search'));
      setDisabled(true)
    }

    updateQueryObject({search: value});
    setSearchDelayTime(setTimeout(() => {
      setRaiseQuery(true)
    }, 1500));
  };

  const doSort = e => {
    updateQueryObject({sort: e.target.name});
    setRaiseQuery(true)
  };

  const doOrdering = () =>{
    let value = queryObject.ascending;
    if(value == 'true'){
      value = 'false';
    } else {
      value = 'true'
    }
      updateQueryObject({ascending: value});
    setRaiseQuery(true)
  };

  const getQueryString = () => {
    let queryString = '?';
    let keys = Object.keys(queryObject);
    keys.forEach((key, index) => {
      let attribute = queryObject[key];
      if (attribute && attribute.trim() !== '') {
        queryString = queryString + `${key}=${queryObject[key]}`;
        if (index < keys.length - 1 && queryObject[key].trim() !== '') {
          queryString = queryString + '&';
        }
      }
    });
    return queryString;
  };
  const updateQueryObject = (value) => {
    setQueryObject({...queryObject, ...value})
  };


  const doQuery = () => {
    (query || _.identity)(getQueryString());
  };

  useEffect(() => {
    if (raiseQuery) {
      doQuery(queryObject);
      setRaiseQuery(false);
    }
  }, [raiseQuery]);
  return <EventToolbarComponent>
    <div className="event-search">
      <Input margin="0"
             name="search"
             onChange={handleInputValueChangeAndSearchAfterDelay}
             placeholder="Eventsuche"
             value={queryObject.search}
             type="text"
             onClick={e => e.target.select()}/>
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
    <div className="event-sort">
      <Dropdown text={`Sortiert nach ${queryObject.sort || "Datum"}`}>
        <DropdownItem text="Datum" name="Datum" onClick={doSort}/>
        <DropdownItem text="Sparte" name="sparte" onClick={doSort}/>
        <DropdownItem text="A-Z" name="az" onClick={doSort}/>
      </Dropdown>
      <div>
        <Button text={queryObject.ascending === 'true'? 'Aufsteigend': 'Absteigend'}
                onClick={doOrdering} color="primaryOutline"/>
      </div>
    </div>
  </EventToolbarComponent>;
};

export default EventToolbar;
