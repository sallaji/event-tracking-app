"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
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
      // income: {type: mongoose.Schema.Types.ObjectId, ref: 'Income'},
      // tickets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'}],
      // costs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cost'}],
      // sponsors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Sponsor'}]
    }
);

EventSchema.virtual('id').get(function(){
  return this._id.toHexString()
});
EventSchema.set('toJson',{
  virtuals:true
});
module.exports = mongoose.model('Event', EventSchema);