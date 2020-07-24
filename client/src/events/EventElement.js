import React from 'react';
import {Row, Col} from 'reactstrap';

const EventElement = ({event}) =>
    <Row>
      <Col>
        {event.name}
      </Col>

      <Col>
        {event.id}
      </Col>
    </Row>;

export default EventElement