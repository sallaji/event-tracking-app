import React from "react";
import {Col, Row, Container} from "reactstrap";
import _ from 'lodash'
import EventElement from './EventElement'
const EventTable = ({events}) =>
    <Container>
      {
        _.map(events, event =>
            <EventElement
                key={event.id}
                event={event}/>
        )
      }
    </Container>;

export default EventTable;