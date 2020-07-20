"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: {
          select: ['name', 'type']
        }
      },
      name: {
        type: String,
        required: 'Eventname nicht eingegeben',
      },
      date: {
        type: Date,
        required: 'Datum nicht eingegeben'
      },
      responsible: {
        type: String
      },
      profit: {type: mongoose.Schema.Types.ObjectId, ref: 'Profit'}

      // income: {type: mongoose.Schema.Types.ObjectId, ref: 'Income'},
      // tickets: [
      //   {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'Ticket'
      //   }
      // ],
      // costs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cost'}],
      // sponsors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Sponsor'}]
    }
);

EventSchema.virtual('id').get(function () {
  return this._id.toHexString()
});
EventSchema.set('toJson', {
  virtuals: true
});
EventSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Event', EventSchema);