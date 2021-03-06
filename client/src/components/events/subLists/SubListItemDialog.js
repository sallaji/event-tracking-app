import Dialog from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {Input} from "../../inputs";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import _ from 'lodash';

const SubListItemDialog = ({
  children,
  actionFn,
  item:itm,
  nameKey0,
  nameKey1,
  key0Type,
  key1Type,
  key0Required,
  key1Required,
  readOnly,
  confirmButtonText
}) => {

  const tempItem = itm;
  const [item, setItem] = useState(itm);
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    if(!readOnly){
      setOpen(!open);
    }
  };

  const cancelInput = () => {
    setItem(tempItem);
    handleDialogOpen()
  };
  const handleConfirmation = () => {
    (actionFn || _.identity)(item);
    handleDialogOpen();
  };
  useEffect(() => {
    setItem(itm);
  }, [itm]);

  const change = event => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  return (
      <div>
        <div onClick={handleDialogOpen}>
          {children}
        </div>
        <Dialog open={open}
                aria-labelledby="form-dialog-title">
          <DialogTitle>
            Hacerlo generico
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              hacer text generico
            </DialogContentText>
            <Input
                onChange={change}
                name="key0"
                value={item.key0}
                disabled={readOnly}
                label={nameKey0}
                required={key0Required}
                type={key0Type}
            />
            <Input
                onChange={change}
                name="key1"
                value={item.key1}
                disabled={readOnly}
                label={nameKey1}
                required={key1Required}
                type={key1Type}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelInput} color="primary">Ablehnen</Button>
            <Button onClick={handleConfirmation}
                    color="secondary"
                    variant="contained">{confirmButtonText}</Button>
          </DialogActions>
        </Dialog>
      </div>
  );
};
export default SubListItemDialog