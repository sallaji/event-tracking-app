"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
    {
      price: {
        type: Number
      },
      quantity: {
        type: Number,
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: 'Es wurde dem Ticket kein Event zugewiesen'
      }
    }
);

module.exports = mongoose.model('Ticket', TicketSchema);