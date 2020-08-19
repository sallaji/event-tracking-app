import React, {useEffect, useState} from "react";
import SubListItemDialog from "./SubListItemDialog";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from "clsx";
import _ from 'lodash'

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
    color: theme.palette.primary.main,
    transition: "0.3s",
    '&:hover': {
      backgroundColor: fade(theme.palette.gray.light, 1),
      color: theme.palette.info.main,
      transition: "0.3s",
    },
  }
}));

const SubListItem = ({
  item,
  nameKey0,
  nameKey1,
  readOnly,
  key0Type,
  key1Type,
  key0Required,
  key1Required,
  update,
  _delete
}) => {

  useEffect(() => {
  }, []);
  const handleDelete = () => {
    (_delete || _.identity)(item.id)
  };
  const classes = useStyles();

  return item && <div className={classes.ticketListItemContainer}>
    <div className={classes.ticketListItemInfo}>
      <p><strong>{nameKey0}: </strong>{item.key0}</p>
      <p><strong>{nameKey1}: </strong>{item.key1}</p>
    </div>
    <div className={classes.ticketListItemIcons}>
      <SubListItemDialog
          nameKey0={nameKey0}
          nameKey1={nameKey1}
          readOnly={readOnly}
          key0Type={key0Type}
          key1Type={key1Type}
          key0Required={key0Required}
          key1Required={key1Required}
          item={item}
          actionFn={update}
          confirmButtonText="updaten">
        <IconButton
            disabled={readOnly}
            className={clsx(classes.button, "info")}>
          <EditIcon/>
        </IconButton>
      </SubListItemDialog>
      <div>
        <IconButton
            disabled={readOnly}
            className={clsx(classes.button)}
            onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
      </div>

    </div>
  </div>
};
export default SubListItem;