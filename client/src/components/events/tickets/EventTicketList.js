import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import clsx from "clsx";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Button} from '../../buttons'
import Typography from "@material-ui/core/Typography";
import _ from 'lodash'
import EventTicketListElement from "./EventTicketListElement";
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    border: `1px solid ${theme.palette.gray.main}`,
    margin: '0.1rem 0'
  },
  listHeader:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    transition: "0.3s",
    '&:hover':{
      backgroundColor: theme.palette.primary.ultralight,
      color: theme.palette.primary.main,
      transition: "0.3s",
    }
  },

  animatedArrowUp:{
    animation: `$doArrowUp 1000ms`,
    animationFillMode: "forwards"
  },
  "@keyframes doArrowUp":{
    "0%":{
      transform: "rotate(0deg)"
    },
    "100%":{
      transform: "rotate(180deg)"
    }
  },
  animatedArrowDown:{
    animation: `$doArrowDown 1000ms`,
    animationFillMode: "forwards"
  },
  "@keyframes doArrowDown":{
    "0%":{
      transform: "rotate(180deg)"
    },
    "100%":{
      transform: "rotate(0deg)"
    }
  },

  ticketList: {
    position: 'relative',
    overflow: 'auto',
    padding: "0.5rem",
    maxHeight: 300
  },
  hideList: {
    display: "none"
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
      <div className={clsx(classes.root, className)}>
        <div className={classes.listHeader} onClick={handleOpen}>
          <Typography variant="h6">Tickets</Typography>
          <IconButton>
            <KeyboardArrowDownIcon className={clsx({
              [classes.animatedArrowUp]: open, [classes.animatedArrowDown]: !open,
            })}/>
          </IconButton>
        </div>
        <div className={clsx({[classes.hideList]: !open})}>
          <div className={classes.listSubheaderContainer}>
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
              _.map(tickets, (ticket, index) => (
                  <EventTicketListElement ticket={ticket} key={index}
                                          confirmButtonText="updaten"/>
              ))
            }
          </List>
        </div>
      </div>
  );
};
export default EventTicketList;