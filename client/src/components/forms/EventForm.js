import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from "../../contexts/UserContext";
import {FormInput} from "./FormInput";
import styled from 'styled-components';

const EventFormComponent = styled.div`;
.grid-form{
background: red;
display: grid;
grid-template-columns: 25% 25% 25% 25% ;
}

.grid-form-col-4{
grid-column: 1/5;
}

.grid-form-col-3{
grid-column: 1/4;
}

.grid-form-col-2{
grid-column: 1/3;
}

`;
const EventForm = ({fn, readOnly = false, event: evt}) => {
  const {user, setUser} = useContext(UserContext);
  const [event, setEvent] = useState(evt);

  /**
   * evt ist das Event, das als props in die Komponente
   * hinein gegeben wird. Wenn sich evt ändert, wollen wir diese Änderung übernehmen.
   */
  useEffect(() => {
    // let parsedDate = new Date(evt.date).toISOString()
    // .substring(0, (mk.indexOf("T")|0) + 6|0);

    setEvent(evt)
  }, [evt]);

  const change = e =>{
    setEvent({...event, [e.target.name]: e.target.value});
  };

  return (
      <EventFormComponent>
        <form className="grid-form" action="">
          <FormInput
              className="grid-form-col-4"
              labelText="Eventname"
              placeholder="Eventname"
              value={event.name}
              name="name"
              disabled={readOnly}
              onChange={change}/>

              {/*TODO Replace with dropdown*/}
          <FormInput
              type="input"
              className="grid-form-col-3"
              labelText="Sparte"
              placeholder="Sparte"
              value={event.responsible}
              name="crew"
              disabled={readOnly}
              onChange={change}/>

          put time picker
          {event.date}
          {/*{new Date(event.date).getTime()}*/}
          <FormInput
              type="datepicker"
              className="grid-form-col-3"
              labelText="Datum"
              // placeholder="Verantwortliche"
              value={new Date(event.date).getTime()}
              name="date"
              // disabled={readOnly}
              onChange={change}
          />

          <FormInput
              className="grid-form-col-2"
              placeholder="Eventname"
              value={event.name}
              name="name"
              disabled={readOnly}
              onChange={change}/>

        </form>
      </EventFormComponent>
  )
};

export default EventForm;