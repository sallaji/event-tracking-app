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
import EventTicketListElement from "./tickets/EventTicketListElement";
import EventTicketList from "./tickets/EventTicketList";

const EventFormComponent = styled.div`
.gridForm {
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 0 1rem;

//max-width: 50%
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
margin: 0.25rem 0;

    /* default styles here for older browsers. 
       I tend to go for a 600px - 960px width max but using percentages
    */
    @media only screen and (min-width: 960px) {
        /* styles for browsers larger than 960px; */
    }
    @media only screen and (min-width: 1440px) {
        /* styles for browsers larger than 1440px; */
    }
    @media only screen and (min-width: 2000px) {
        /* for sumo sized (mac) screens */
    }
    @media only screen and (max-device-width: 480px) {
       /* styles for mobile browsers smaller than 480px; (iPhone) */
    }
    @media only screen and (device-width: 768px) {
       /* default iPad screens */
    }
    /* different techniques for iPad screening */
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
      /* For portrait layouts only */
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
      /* For landscape layouts only */
    }
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
              defaultValue={event.name}
              disabled={readOnly}
              label="name"
              required={true}
              type="text"
          />
          <Input
              className="gridFormCol4 inputField"
              onChange={change}
              name="responsible"
              defaultValue={event.responsible}
              disabled={readOnly}
              label="Verantwortliche"
              required={false}
              type="text"
          />


          <EventTicketList className="gridFormCol4"
                           tickets={[
                             {price: 'CHF 15', quantity: '2'},
                             {price: 'CHF 10', quantity: '4'},
                             {price: 'CHF 20', quantity: '6'}
                           ]}/>
        </form>
      </EventFormComponent>
  )
};

export default EventForm;