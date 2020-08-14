// import React, {useContext, useEffect, useState} from 'react'
// import {UserContext} from "../../contexts/UserContext";
// import {makeStyles} from "@material-ui/core";
// import {Input} from '../inputs/index'
// import Datepicker from "../inputs/DatepickerInput";
// import clsx from "clsx";
// const useStyles = makeStyles((theme) => ({
//       gridForm: {
//         display: "grid",
//         gridTemplateColumns: "25% 25% 25% 25%",
//         '& $gridFormCol4':{
//           backgroundColor: "red"
//         }
//       },
//
//       gridFormCol4: {
//         gridColumn: "1/5"
//       },
//       gridFormCol3: {
//         gridColumn: "1/4"
//       },
//       gridFormCol2: {
//         gridColumn: "1/3"
//       },
//
//     }
// ));
// const EventForm = ({readOnly = false, event: evt}) => {
//   const {user, setUser} = useContext(UserContext);
//   const [event, setEvent] = useState(evt);
//   const classes = useStyles();
//   /**
//    * evt ist das Event, das als props in die Komponente
//    * hinein gegeben wird. Wenn sich evt ändert, wollen wir diese Änderung übernehmen.
//    */
//   useEffect(() => {
//     // let parsedDate = new Date(evt.date).toISOString()
//     // .substring(0, (mk.indexOf("T")|0) + 6|0);
//     setEvent(evt)
//   }, [evt]);
//
//   const change = e => {
//     setEvent({...event, [e.target.name]: e.target.value});
//   };
//
//   return (
//       event &&
//       <div>
//         <form className={classes.gridForm} action="">
//           <Input
//               className={clsx(classes.gridFormCol4)}
//               onChange={change}
//               name="name"
//               defaultValue={event.name}
//               disabled={readOnly}
//               label="name"
//               required={false}
//               type="text"
//           />
//           <Datepicker/>
//
//
//         </form>
//       </div>
//   )
// };
//
// export default EventForm;

import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from "../../contexts/UserContext";
import {makeStyles} from "@material-ui/core";
import {Input} from '../inputs'
import Datepicker from "../inputs/DatepickerInput";
import styled from 'styled-components';
import EventTicket from "./tickets/EventTicket";
import EventTicketList from "./tickets/EventTicketList";

const EventFormComponent = styled.div`
.gridForm {
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 0 1rem;
}
.gridFormCol4 {
grid-column: 1/5;
}
.gridFormCol3 {
grid-column: 1/4;
}
.gridFormCol2 {
grid-column: 1/3;
}

.inputField{
margin: 0.25rem 0;
}
`;

const EventForm = ({readOnly = false, event: evt}) => {
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

  const change = e => {
    setEvent({...event, [e.target.name]: e.target.value});
  };

  return (
      event &&
      <EventFormComponent>
        <form className="gridForm inputField" action="">
          <Input
              className="gridFormCol4 inputField"
              onChange={change}
              name="name"
              defaultValue={event.name}
              disabled={readOnly}
              label="name"
              required={true}
              type="text"
          />
          <Input
              className="gridFormCol2 inputField"
              onChange={change}
              name="name"
              defaultValue={event.responsible}
              disabled={readOnly}
              label="name"
              required={false}
              type="text"
          />
          <Datepicker
              className="gridFormCol2 inputField"
              name="date"
              value={event.date}
              disabled={readOnly}
              onChange={change}
              label="Datum"/>

          <EventTicket
              ticket={{price: '', quantity: ''}}

          />
          <EventTicketList className="gridFormCol4"/>
          <Datepicker
              className="gridFormCol2 inputField"
              name="date"
              value={event.date}
              disabled={readOnly}
              onChange={change}
              label="Datum"/>
          <Datepicker
              className="gridFormCol2 inputField"
              name="date"
              value={event.date}
              disabled={readOnly}
              onChange={change}
              label="Datum"/>
          <Datepicker
              className="gridFormCol2 inputField"
              name="date"
              value={event.date}
              disabled={readOnly}
              onChange={change}
              label="Datum"/>

        </form>
      </EventFormComponent>
  )
};

export default EventForm;