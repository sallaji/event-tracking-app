import React from "react";
// import {Col, Row, Container} from "reactstrap";
import _ from 'lodash'
import EventElement from './EventElement'

const EventTable = ({events}) =>
    <table className="event-table">
      <thead>
      <tr>
        <th>Datum</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {
        _.map(events, (event, idx) =>
            <EventElement
                idx={idx}
                key={event._id}
                event={event}/>
        )
      }
      </tbody>
    </table>;

export default EventTable;