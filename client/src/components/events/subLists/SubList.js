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
            confirmButtonText="hinzufügen"
            item={{key0: '', key1: ''}}
            actionFn={props.create}>
          <Button
              className={classes.addItemButton}
              variant="outlined"
              disabled={props.readOnly}
              aria-label="menu">
            <AddCircleOutlinedIcon/> hinzufügen
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
              readOnly={props.readOnly}
          />
        })
      }
    </List>
  </div>)
};

const SubList = ({
  className,
  items: originalItems,
  target,
  readOnly,
  subListName,
  nameKey0,
  nameKey1,
  key0,
  key0Type = 'text',
  key1Type = 'text',
  key0Required = false,
  key1Required = false,
  key1
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(null);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    parseToGenericKeys();
  }, [originalItems]);

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
    _.map(originalItems, (item, index) => {
      let itemWithOriginalKeys = {
        [key0]: item.key0,
        [key1]: item.key1,
        id: item.id || index
      };
      itemsWithOriginalKeys.push(itemWithOriginalKeys);
    });
    setItems(itemsWithOriginalKeys);
  };

  const create = (item) => {
    if (!item.id) {
      item.id = items.length
    }
    setItems(_.concat(items, item));
    console.log("create desde sublist", item)
  };

  const update = (item) => {
    setItems(
        _.map(items, itm => itm.id === item.id ? item : itm));
    console.log("update desde sublist")
  };

  const _delete = (id) => {
    setItems(_.reject(items, {id: id}));
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
                          create={create}
                          update={update}
                          _delete={_delete}
                          readOnly={readOnly}/>
      </div>
  )
};
export default SubList;