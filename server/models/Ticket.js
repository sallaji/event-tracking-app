"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
    {
      price: {
        type: number
      }
    }
);