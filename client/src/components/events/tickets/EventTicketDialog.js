import Dialog from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {Input} from "../../inputs";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";

const EventTicketDialog = ({
  children, actionFn, ticket: tkt, required, readOnly, confirmButtonText
}) => {

  const tempTicket = tkt;
  const [ticket, setTicket] = useState(tkt);
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => setOpen(!open);
  const cancelInput = () => {
    setTicket(tempTicket);
    handleDialogOpen()
  };
  useEffect(() => {
    // setTicket(tkt)
  }, [tkt]);

  const change = event => {
    setTicket({...ticket, [event.target.name]: event.target.value});
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
                name="price"
                defaultValue={ticket.price}
                disabled={readOnly}
                label="Preis"
                required={required}
                type="text"
            />
            <Input
                onChange={change}
                name="quantity"
                defaultValue={ticket.quantity}
                disabled={readOnly}
                label="Verkaufte Tickets"
                required={required}
                type="text"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelInput} color="primary">Ablehnen</Button>
            <Button onClick={() => {
            }} color="secondary"
                    variant="contained">{confirmButtonText}</Button>
          </DialogActions>
        </Dialog>
      </div>
  );
};
export default EventTicketDialog