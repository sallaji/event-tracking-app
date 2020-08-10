import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from "../../contexts/UserContext";
import {Input} from "../inputs";
import {FormInput} from "./FormInput";

const EventForm = ({fn, readOnly = false, event: evt}) => {
  const {user, setUser} = useContext(UserContext);
  const [event, setEvent] = useState(evt);

  /**
   * evt ist das Event, das als props in die Komponente
   * hinein gegeben wird. Wenn sich evt ändert, wollen wir diese Änderung übernehmen.
   */
  useEffect(() => {
    setEvent(evt)
  }, [evt]);

  const change = e =>
      setEvent({...event, [e.target.name]: e.target.value});
  return (
      <div>
        <form action="">
          <FormInput
              labelText="holi"
              placeholder="Eventname"
              value={event.name}
              name="name"
              disabled={readOnly}
              onChange={change}/>

          <FormInput
              labelText="holi"
              placeholder="Eventname"
              value={event.name}
              name="name"
              disabled={readOnly}
              onChange={change}/>

          <FormInput
              placeholder="Eventname"
              value={event.name}
              name="name"
              disabled={readOnly}
              onChange={change}/>

        </form>
      </div>
  )
};

export default EventForm;