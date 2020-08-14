import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Input} from "../inputs";
import {AddCircle} from "@styled-icons/ionicons-solid";
import {Button} from "../buttons";
import {Icon} from "../icons";
import {Dropdown, DropdownItem} from "../dropdowns";
import _ from 'lodash'

const EventToolbarComponent = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
width: 100%;
justify-content: center;
align-items: center;
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
  const [searchDelayTime, setSearchDelayTime] = useState(null);
  const handleInputValueChangeAndSearchAfterDelay = async (e) => {
    clearTimeout(searchDelayTime);
    let value = e.target.value;
      setQueryObject(_.omit(queryObject, 'search'));
    updateQueryObject({search: value});
    setSearchDelayTime(setTimeout(() => {
      setRaiseQuery(true)
    }, 1500));
  };

  const doSort = e => {
    updateQueryObject({sort: e.target.name});
    setRaiseQuery(true)
  };
  const getGermanSortName = englishWord => {
    let dictionary = {
      own: "meine Events",
      name: "Eventname",
      user: "Sparte",
      date: "Datum"
    };
    return dictionary[englishWord] || dictionary.date
  };

  const doOrdering = e => {
    let value = e.target.name === 'ascending'? 'true': 'false';
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
      <Input
             name="search"
             onChange={handleInputValueChangeAndSearchAfterDelay}
             placeholder="Eventsuche"
             value={queryObject.search}
             type="search"
             onFocus={e => e.target.select()}
      />
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
      <Dropdown text={`Sortiert nach ${getGermanSortName(queryObject.sort)}`}>
        <DropdownItem text={getGermanSortName('own')} name="own" onClick={doSort}/>
        <DropdownItem text={getGermanSortName('date')} name="date" onClick={doSort}/>
        <DropdownItem text={getGermanSortName('user')} name="user" onClick={doSort}/>
        <DropdownItem text={getGermanSortName('name')} name="name" onClick={doSort}/>
      </Dropdown>
      <div>
        <Dropdown text={queryObject.ascending === 'true' ? 'Aufsteigend'
            : 'Absteigend'}>
          <DropdownItem text="Aufsteigend" name="ascending"
                        onClick={doOrdering}/>
          <DropdownItem text="Absteigend" name="descending"
                        onClick={doOrdering}/>
        </Dropdown>
      </div>
    </div>
  </EventToolbarComponent>;
};

export default EventToolbar;
