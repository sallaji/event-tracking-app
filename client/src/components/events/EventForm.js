import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from "../../contexts/UserContext";
import {Input} from '../inputs'
import Datepicker from "../inputs/DatepickerInput";
import styled from 'styled-components';
import SubList from "./subLists/SubList";

const EventFormComponent = styled.div`
display: flex;
justify-content: center;
width: 100%;
.gridForm {
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 0 1rem;
max-width: 50%;
flex-grow: 1;
}
.gridFormCol4 {
grid-column: 1/5;
}
.gridFormCol3 {
grid-column: 1/4;
}
.gridFormCol2 {
grid-column: 1/2;
}
.inputField{
margin: 0.75rem 0;
}

@media only screen and (max-width: 768px){
.gridForm{
max-width: 90%;
}
}
`;

const EventForm = ({
  readOnly = false,
  event: evt,
  updateTemporaryChanges
}) => {
  const {user, setUser} = useContext(UserContext);
  const [event, setEvent] = useState(evt);
  const [dataMustUpdate, setDataMustUpdate] = useState(false);

  useEffect(() => {
    setEvent(evt);
    // setDataMustUpdate(false)
  }, [dataMustUpdate,evt]);

  const change = e => {
    const newData = {...event, [e.target.name]: e.target.value};
    updateTemporaryChanges(newData);
    setEvent(newData);
    // setDataMustUpdate(true)
  };

  const updateSubList = (subListItems, target) => {
    const newData = {...event, [target]: subListItems};
    updateTemporaryChanges(newData);
    setEvent(newData);
  };

  return (
      event &&
      <EventFormComponent>
        <form className="gridForm inputField" action="">
          <Datepicker
              className="gridFormCol3 inputField"
              name="date"
              value={event.date}
              disabled={readOnly}
              onChange={change}
              label="Datum"/>
          <Input
              className="gridFormCol4 inputField"
              onChange={change}
              name="name"
              value={event.name}
              disabled={readOnly}
              label="name"
              required={true}
              type="text"
          />
          <Input
              className="gridFormCol4 inputField"
              onChange={change}
              name="responsible"
              value={event.responsible}
              disabled={readOnly}
              label="Verantwortliche"
              required={false}
              type="text"
          />
          <Input
              className="gridFormCol4 inputField"
              onChange={change}
              name="barSales"
              value={event.barSales}
              disabled={readOnly}
              label="Umsatz-Bar"
              required={false}
              type="currency"
          />
          <Input
              className="gridFormCol4 inputField"
              onChange={change}
              name="ticketSales"
              value={event.ticketSales}
              disabled={readOnly}
              label="Umsatz-Eintritte"
              required={false}
              type="currency"
          />

          <SubList className="gridFormCol4"
                   items={event.tickets}
                   target="tickets"
                   subListName="Tickets"
                   nameKey0="Preis"
                   nameKey1="Verkauft"
                   key0Type="currency"
                   key1Type="number"
                   key0Required={false}
                   key1Required={false}
                   key0="price"
                   key1="quantity"
                   readOnly={readOnly}
                   updateSubList={updateSubList}/>

          <SubList className="gridFormCol4"
                   items={event.sponsors}
                   target="sponsors"
                   subListName="Sponsoren"
                   nameKey0="Name"
                   nameKey1="Betrag"
                   key0Type="text"
                   key1Type="currency"
                   key0Required={false}
                   key1Required={false}
                   key0="name"
                   key1="amount"
                   readOnly={readOnly}
                   updateSubList={updateSubList}/>

          <SubList className="gridFormCol4"
                   items={event.expenses}
                   target="expenses"
                   subListName="Ausgaben"
                   nameKey0="Bezeichnung"
                   nameKey1="Betrag"
                   key0Type="text"
                   key1Type="currency"
                   key0Required={false}
                   key1Required={false}
                   key0="description"
                   key1="amount"
                   readOnly={readOnly}
                   updateSubList={updateSubList}/>
        </form>
      </EventFormComponent>
  )
};

export default EventForm;