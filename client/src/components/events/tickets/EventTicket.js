import React, {useEffect, useState} from "react";
import {Input} from "../../inputs";
import Dialog from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const EventTicketComponent = styled.div`
.ticketGrid{
display: grid;
}
`;

const EventTicket = ({actionFn, ticket: tkt, required, readOnly}) => {
  const [ticket, setTicket] = useState(tkt);
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => setOpen(!open);

  useEffect(() => {
    setTicket(tkt)
  }, [tkt]);

  const change = event => {
    setTicket({...ticket, [event.target.name]: event.target.value});
  };

  return <div className="ticketGrid">
    <div onClick={handleDialogOpen}>
mira
    </div>
    <Dialog open={open} onClose={handleDialogOpen}
            aria-labelledby="form-dialog-title">
      <DialogTitle>
        Hacerlo generico
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          hacer text generico
        </DialogContentText>
        <Input
            className="gridFormCol2 inputField"
            onChange={change}
            name="price"
            defaultValue={ticket.price}
            disabled={readOnly}
            label="Preis"
            required={required}
            type="text"
        />
        <Input
            className="gridFormCol2 inputField"
            onChange={change}
            name="tickets"
            defaultValue={ticket.quantity}
            disabled={readOnly}
            label="Verkaufte Tickets"
            required={required}
            type="text"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogOpen} color="primary">Ablehnen</Button>
        <Button onClick={() => {
        }} color="secondary" variant="contained">Hinzufügen (make it generic :P)</Button>
      </DialogActions>
    </Dialog>
  </div>
};
export default EventTicket;