import React, {useEffect, useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import {makeStyles} from "@material-ui/core";
import EventForm from "./EventForm";
import {eventModel} from "../../models/event";
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props}/>
});
const EventDetails = ({close, event = eventModel, open, text, actionFn}) => {
  const [modifiedEvent, setModifiedEvent] = useState(null);
  const classes = useStyles();
  const save = () => {
    (actionFn || _.identity)(modifiedEvent);
    close();
  };
  useEffect(() => {
    if (!open) {
      setModifiedEvent(null)
    }
  }, [open]);
  const updateTemporaryChanges = (event) => {
    setModifiedEvent(event)
  };
  return (
      <div>
        <Dialog fullScreen open={open}
                onClose={close}
                TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={close}
                          aria-label="close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Event {text}
              </Typography>
              <Button autoFocus color="inherit" onClick={save}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <EventForm event={event}
                     readOnly={false}
                     updateTemporaryChanges={updateTemporaryChanges}/>
        </Dialog>
      </div>
  )
};
export default EventDetails;