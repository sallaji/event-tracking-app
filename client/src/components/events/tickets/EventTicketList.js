import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import clsx from "clsx";
import {ListItemIcon} from "@material-ui/core";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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
    maxHeight: 400,
    '& li':{
      padding:"0.5rem 0"
    }
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

const EventTicketList = ({className}) => {
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

          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (

              <ListItem key={item}>
                <ListItemText primary={`Item ${item}`}/>
              </ListItem>
          ))}
        </List>
      </div>

  );
};
export default EventTicketList;