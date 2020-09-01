"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfitSchema = new Schema(
    {
      description: {
        type: String
      },
      amount: {
        type: Number
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: 'keinem Event zugeordnet'
      }
    }
);
module.exports = mongoose.model('Profit', ProfitSchema);