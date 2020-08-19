import React, {useEffect, useState} from 'react';
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
import SubListItemDialog from "./SubListItemDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: `1px solid ${theme.palette.gray.main}`,
    margin: '0.1rem 0.1rem',
    borderBottom: "1px solid rgba(195, 195, 195)"
  },
  subListHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 2rem",
    transition: "0.3s",
    backgroundColor: "white",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      transition: "0.3s",
      '& $dropdownButtonDown , $dropdownButtonUp':{
        color: theme.palette.info.contrastText,
      },
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
    transition: "0.3s",
    color: theme.palette.info.main,
  },

  subList: {
    position: 'relative',
    overflow: 'auto',
    padding: "0.5rem",
    maxHeight: 300,
    backgroundColor: theme.palette.gray.light
  },
  addItemButton: {
    color: theme.palette.info.main,
    backgroundColor: theme.palette.info.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    }
  },
  addCircleOutlinedIcon:{
    marginRight: 10
  },
  listSubheaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "1rem"
  }
}));

const SubList = ({
  className,
  items: originalItems,
  target,
  readOnly,
  subListName,
  nameKey0,
  nameKey1,
  key0,
  key1,
  key0Type = 'text',
  key1Type = 'text',
  key0Required = false,
  key1Required = false,
  updateSubList,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(null);
  const [subListMustUpdate, setSubListMustUpdate] = useState(false);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    parseToGenericKeys();
    if (subListMustUpdate) {
      sendSubListUpdateToParent();
    }
  }, [subListMustUpdate]);

  const sendSubListUpdateToParent = () => {
    (updateSubList || _.identity)(parseToOriginalKeys(), target);
    setSubListMustUpdate(false)
  };

  const parseToGenericKeys = () => {
    let itemsWithGenericKeys = [];
    _.map(originalItems, (item, index) => {
      let itemWithGenericKeys = {
        key0: item[key0],
        key1: item[key1],
        id: item.id || index
      };
      itemsWithGenericKeys.push(itemWithGenericKeys);
    });
    setItems(itemsWithGenericKeys);
  };

  const parseToOriginalKeys = () => {
    let itemsWithOriginalKeys = [];
    _.map(items, (item, index) => {
      let itemWithOriginalKeys = {
        [key0]: item.key0,
        [key1]: item.key1,
        id: item.id || new Date().getTime()
      };
      itemsWithOriginalKeys.push(itemWithOriginalKeys);
    });
    return itemsWithOriginalKeys;
  };

  const create = (item) => {
    if (!item.id) {
      item.id = items.length
    }
    setItems(_.concat(items, item));
    setSubListMustUpdate(true);
    console.log("create desde sublist", item)
  };

  const update = (item) => {
    setItems(
        _.map(items, itm => itm.id === item.id ? item : itm));
    setSubListMustUpdate(true);
    console.log("update desde sublist")
  };

  const _delete = (id) => {
    setItems(_.reject(items, {id: id}));
    setSubListMustUpdate(true);
    console.log("_delete desde sublist")
  };
  return (
      <div className={clsx(classes.root, className)}>
        <SubListHeader handleOpen={handleOpen}
                       open={open}
                       subListName={subListName}/>
        <SubListContainer items={items}
                          open={open}
                          nameKey0={nameKey0}
                          nameKey1={nameKey1}
                          key0Type={key0Type}
                          key1Type={key1Type}
                          key0Required={key0Required}
                          key1Required={key1Required}
                          create={create}
                          update={update}
                          _delete={_delete}
                          readOnly={readOnly}/>
      </div>
  )
};

const SubListHeader = (props) => {
  const classes = useStyles();
  return (<div className={classes.subListHeader} onClick={props.handleOpen}>
        <Typography variant="h6">{props.subListName}</Typography>
        <IconButton className={clsx({
          [classes.dropdownButtonUp]: props.open,
          [classes.dropdownButtonDown]: !(props.open)
        })}>
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
        <SubListItemDialog
            readOnly={props.readOnly}
            nameKey0={props.nameKey0}
            nameKey1={props.nameKey1}
            key0Type={props.key0Type}
            key1Type={props.key1Type}
            key0Required={props.key0Required}
            key1Required={props.key1Required}
            confirmButtonText="hinzufügen"
            item={{key0: '', key1: ''}}
            actionFn={props.create}>
          <Button
              className={classes.addItemButton}
              disabled={props.readOnly}
              aria-label="menu">
            <AddCircleOutlinedIcon className={classes.addCircleOutlinedIcon}/>hinzufügen
          </Button>
        </SubListItemDialog>
      </div>
    </div>
    <List className={clsx(classes.subList)}>
      {
        _.map(props.items, (item, index) => {
          return <SubListItem
              item={item}
              key={index}
              update={props.update}
              _delete={props._delete}
              nameKey0={props.nameKey0}
              nameKey1={props.nameKey1}
              key0Type={props.key0Type}
              key1Type={props.key1Type}
              key0Required={props.key0Required}
              key1Required={props.key1Required}
              readOnly={props.readOnly}

          />
        })
      }
    </List>
  </div>)
};
export default SubList;