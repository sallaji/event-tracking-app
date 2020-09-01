"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  description: {
    type: String,
    required: 'Beschreibung nicht eingegeben'
  },
  amount: {
    type: Number,
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: 'Beschreibung nicht eingegeben'
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema)