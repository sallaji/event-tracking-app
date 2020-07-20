"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfitSchema = new Schema(
    {
      bar: {
        type: Number
      },
      entrance: {
        type: Number
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        autopopulate: true
      }
    }
);