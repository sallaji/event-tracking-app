import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import clsx from "clsx";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import {Button} from '../../buttons'
import Typography from "@material-ui/core/Typography";
import _ from 'lodash'
import EventTicketListElement from "./EventTicketListElement";

const useStyles = makeStyles((theme) => ({
  root:{
    width: '95%',
    border: `1px solid ${theme.palette.gray.main}`,
    margin: '2rem 0'
  },
  ticketList: {

    // maxWidth: 360,
    // backgroundColor: theme.palette.gray.light,
    position: 'relative',
    overflow: 'auto',
      padding:"0.5rem"
  },

  addTicketButton: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    '&:hover': {
      color: theme.palette.info.main,
      backgroundColor: theme.palette.info.contrastText,
    }
  },
  listSubheaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "1rem"
  }
}));

const EventTicketList = ({className, tickets}) => {
  const classes = useStyles();

  return (
      <div className={clsx(classes.root, className)}>
          <div className={classes.listSubheaderContainer}>
            <Typography variant="h6">Tickets</Typography>
            <div>
              <Button
                  className={classes.addTicketButton}
                  variant="outlined"
                  aria-label="menu"
                  // className={classes.menuButton}
                  onClick={() => {
                  }}>
                <AddCircleOutlinedIcon/> Ticket hinzufügen
              </Button>
            </div>
          </div>

        <List className={clsx(classes.ticketList)}>

          {
            _.map(tickets, (ticket,index)=> (
                <EventTicketListElement ticket={ticket} key={index}
                                        confirmButtonText="updaten"/>
            ))
          }
        </List>
      </div>

  );
};
export default EventTicketList;