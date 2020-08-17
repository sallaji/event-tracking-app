import React, {useEffect, useState} from "react";
import _ from 'lodash'
import SubListItemDialog from "./SubListItemDialog";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  ticketListItemContainer: {
    transition: "0.3s",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "0.5rem",
    '&:hover': {
      backgroundColor: theme.palette.primary.ultralight,
      color: theme.palette.primary.main,
      transition: "0.3s",
    },
    cursor: "pointer",

  },
  button: {
    // backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
    transition: "0.3s",
    '&:hover': {
      color: theme.palette.info.main,
      transition: "0.3s",
    },
  }
}));

const SubListItem = ({
  item: itm,
  nameKey0,
  nameKey1
}) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    itemParser();
  }, []);

  const classes = useStyles();
  const itemParser = () => {
    const keys = Object.keys(itm);
    _.remove(keys, n => n === 'id');
    let parsedItem = {
      key0: itm[keys[0]],
      key1: itm[keys[1]]
    };
    if (itm.id) {
      parsedItem = {...parsedItem, ...{id: itm.id}}
    }
    setItem(parsedItem);
  };

  return item && <div className={classes.ticketListItemContainer}>
    <div className={classes.ticketListItemInfo}>
      <p><strong>{nameKey0}: </strong>{item.key0}</p>
      <p><strong>{nameKey1}: </strong>{item.key1}</p>
    </div>
    <div className={classes.ticketListItemIcons}>
      <SubListItemDialog item={item} confirmButtonText="updaten">
        <IconButton className={clsx(classes.button, "info")}>
          <EditIcon/>
        </IconButton>
      </SubListItemDialog>
      <div>
        <IconButton className={clsx(classes.button)}>
          <DeleteIcon/>
        </IconButton>
      </div>

    </div>
  </div>
};
export default SubListItem;