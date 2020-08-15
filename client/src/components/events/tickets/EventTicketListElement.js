import React, {useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import EventTicketDialog from "./EventTicketDialog";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  ticketListItemContainer: {
    transition: "0.3s",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    '&:hover':{
      backgroundColor: theme.palette.primary.ultralight,
      color: theme.palette.primary.main,
      transition: "0.3s",
    }
  }
}));

const EventTicketListElement = ({ticket}) => {
  const classes = useStyles();

  return <div className={classes.ticketListItemContainer}>

          <div className={classes.ticketListItemInfo}>
            <p><strong>Preis: </strong>{ticket.price}</p>
            <p><strong>Verkauft: </strong>{ticket.quantity}</p>
          </div>
          <div className={classes.ticketListItemIcons}>
            <EventTicketDialog ticket={ticket} confirmButtonText="updaten">
            <Button>
              <EditIcon/>
            </Button>
            </EventTicketDialog>
            <div>
              <Button>
                <DeleteIcon/>
              </Button>
            </div>

          </div>
    </div>
};
export default EventTicketListElement;