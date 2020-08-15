import React, {useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import EventTicketDialog from "./EventTicketDialog";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from "../../buttons";
import {makeStyles} from '@material-ui/core/styles';
import theme from "../../../styles/theme";
import clsx from "clsx";


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
  editIcon:{
    // backgroundColor: theme.palette.info.main,
    color: theme.palette.info.main,
    '&:hover': {
      color: theme.palette.info.dark,
      // backgroundColor: theme.palette.info.contrastText,
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
            <Button className={clsx(classes.editIcon, "info")}>
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