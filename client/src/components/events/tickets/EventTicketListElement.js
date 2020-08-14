import React, {useEffect, useState} from "react";
import {Input} from "../../inputs";
import Dialog from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EventTicketDialog from "./EventTicketDialog";

const EventTicketComponent = styled.div`
.ticketGrid{
display: grid;
}
`;

const EventTicketListElement = ({ticket}) => {

  return <div className="ticketGrid">
    <EventTicketDialog ticket={ticket} confirmButtonText="updaten">
      <ListItem>
        <ListItemText
            primary={ticket.price}
        secondary={ticket.quantity}
        />
      </ListItem>
    </EventTicketDialog>
  </div>
};
export default EventTicketListElement;