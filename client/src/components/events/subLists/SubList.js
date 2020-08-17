import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import clsx from "clsx";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Button} from '../../buttons'
import Typography from "@material-ui/core/Typography";
import _ from 'lodash'
import {IconButton} from "@material-ui/core";
import SubListItem from "./SubListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    border: `1px solid ${theme.palette.gray.main}`,
    margin: '0.1rem 0'
  },
  subListHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    transition: "0.3s",
    '&:hover': {
      backgroundColor: theme.palette.primary.ultralight,
      color: theme.palette.primary.main,
      transition: "0.3s",
    }
  },
  subListContainer: {
    display: "none",

  },
  subListContainerOpen: {
    display: "",

  },
  dropdownButtonDown: {
    transform: "rotate(0deg)",
    transition: "0.3s"
  },

  dropdownButtonUp: {
    transform: "rotate(180deg)",
    transition: "0.3s"
  },

  subList: {
    position: 'relative',
    overflow: 'auto',
    padding: "0.5rem",
    maxHeight: 300
  },
  addItemButton: {
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
const SubListHeader = (props) => {
  const classes = useStyles();
  return (<div className={classes.subListHeader} onClick={props.handleOpen}>
        <Typography variant="h6">Tickets</Typography>
        <IconButton className={clsx({
          [classes.dropdownButtonUp]: props.open,
          [classes.dropdownButtonDown]: !(props.open)})}>
          <KeyboardArrowDownIcon/>
        </IconButton>
      </div>
  )
};

const SubListContainer = (props) => {

  const classes = useStyles();

  return (<div className={clsx({
    [classes.subListContainerOpen]: props.open,
    [classes.subListContainer]: !props.open
  })}>
    <div className={classes.listSubheaderContainer}>
      <div>
        <Button
            className={classes.addItemButton}
            variant="outlined"
            aria-label="menu"
            onClick={() => {
            }}>
          <AddCircleOutlinedIcon/> Hinzufügen
        </Button>
      </div>
    </div>
    <List className={clsx(classes.subList)}>
      {
        _.map(props.items, (item, index) => {
          return <SubListItem item={item} key={index}/>
        })
      }
    </List>
  </div>)
};

const SubList = ({
  className,
  items
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const create = () => {
    console.log("create desde sublist")
  };

  const update = () => {
    console.log("update desde sublist")
  };

  const _delete = () => {
    console.log("_delete desde sublist")
  };

  return (
      <div className={clsx(classes.root, className)}>
        <SubListHeader handleOpen={handleOpen}
                       open={open}/>
        <SubListContainer items={items}
                          open={open}
                          subListElement={subListElement}
                          create={create}
                          update={update}
                          _delete={_delete}/>
      </div>
  )
};
export default SubList;