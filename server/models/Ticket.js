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
        required: 'keinem Event zugeordnet'
      }
    }
);

TicketSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
TicketSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Ticket', TicketSchema);