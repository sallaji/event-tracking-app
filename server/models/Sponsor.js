"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SponsorSchema = new Schema(
    {
      name: {
        type: String,
        required: 'Sponsorname nicht eingegeben'
      },
      amount: {
        type: Number,
        required: 'Sponsorbetrag nicht eingegeben'
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: 'Event nicht zuzgeordnet'
      }
    }
);

module.exports = mongoose.model('Sponsor', SponsorSchema);