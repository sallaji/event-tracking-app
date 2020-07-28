import React from 'react';
// import {Row, Col} from 'reactstrap';

const EventElement = ({event, idx}) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };
  const formatDate = date => {
    let local = new Date(date);
    return local.toLocaleDateString('de-DE', options)
  };

  return (<tr key={event.id}
              className={`event-item ${idx % 2 === 0 ? "even" : "odd"}`}>
    <td>
      {formatDate(event.date)}
    </td>
    <td>
      {event.name}
    </td>
  </tr>);
};

export default EventElement