import React, {useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import EventTicketDialog from "./EventTicketDialog";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme)=>({
  ticketListItemContainer: {
    transition: "0.3s",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "0.5rem",
    '&:hover':{
      backgroundColor: theme.palette.primary.ultralight,
      color: theme.palette.primary.main,
      transition: "0.3s",
    },
    cursor: "pointer",

  },
  button:{
    // backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
    transition: "0.3s",
    '&:hover': {
      color: theme.palette.info.main,
      transition: "0.3s",
    },
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
            <IconButton className={clsx(classes.button, "info")}>
              <EditIcon/>
            </IconButton>
            </EventTicketDialog>
            <div>
              <IconButton className={clsx(classes.button)}>
                <DeleteIcon/>
              </IconButton>
            </div>

          </div>
    </div>
};
export default EventTicketListElement;