import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Input} from "../inputs";
import AddIcon from '@material-ui/icons/Add';
import {Button} from '../buttons'
import {Dropdown, DropdownItem} from "../dropdowns";
import _ from 'lodash'
import theme from "../../styles/theme";
import EventDetails from "./EventDetails";

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

.add-event-button{
padding: 14px;
margin:0;
background-image: linear-gradient(to bottom right, 
${theme.palette.info.light}, ${theme.palette.info.main});
 color: ${theme.palette.info.contrastText};
 &:hover{
 background-image: linear-gradient(to bottom right, 

 ${theme.palette.info.main}, ${theme.palette.info.light});
 color: ${theme.palette.info.contrastText};
 }
}
.add-event-icon{
 color: ${theme.palette.info.light}
 }
.event-sort{
display: flex;
justify-content: center;
align-items: center;
padding: 0.875rem 0;
}
@media only screen and (max-width: 768px){
.add-event-button{
font-size: 0.7rem;
}

}
`;

const EventToolbar = ({create, query, queryObject: qobj}) => {

  const [queryObject, setQueryObject] = useState(qobj);
  const [raiseQuery, setRaiseQuery] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [disabled, setDisabled] = useState(!qobj.search);
  const [searchDelayTime, setSearchDelayTime] = useState(null);

  const handleEventDetailsOpen = () => {
    setShowEventDetails(!showEventDetails)
  };

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
    let value = e.target.name === 'ascending' ? 'true' : 'false';
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
              className="add-event-button"
              color="primary"
              onClick={handleEventDetailsOpen}
              width="200px">

        <AddIcon className="add-event-icon"/>

      </Button>
      <EventDetails
          actionFn={create}
          close={handleEventDetailsOpen} open={showEventDetails}
          text="erstellen"/>
    </div>
    <div className="event-sort">
      <Dropdown text={`Sortiert nach ${getGermanSortName(queryObject.sort)}`}>
        <DropdownItem text={getGermanSortName('own')} name="own"
                      onClick={doSort}/>
        <DropdownItem text={getGermanSortName('date')} name="date"
                      onClick={doSort}/>
        <DropdownItem text={getGermanSortName('user')} name="user"
                      onClick={doSort}/>
        <DropdownItem text={getGermanSortName('name')} name="name"
                      onClick={doSort}/>
      </Dropdown>
    </div>
    <div className="event-sort">
      <Dropdown text={queryObject.ascending === 'true' ? 'Aufsteigend'
          : 'Absteigend'}>
        <DropdownItem text="Aufsteigend" name="ascending"
                      onClick={doOrdering}/>
        <DropdownItem text="Absteigend" name="descending"
                      onClick={doOrdering}/>
      </Dropdown>
    </div>
  </EventToolbarComponent>;
};

export default EventToolbar;
