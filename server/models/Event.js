"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/User');

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

EventSchema.statics = {
  search: function (q) {
    let searchOps = q ? {
      $text: {
        $search: q,
        $caseSensitive: false
      }
    } : {};
//TODO: Buscar por atributos de usuario y combinar con Eventos
    let users = User.find(searchOps).then(u=> {
      console.log(u[0].name);
    })
    return this.find(
        searchOps)
  }
};

EventSchema.index({name: 'text', date: 'text'});

EventSchema.virtual('id').get(function () {
  return this._id.toHexString()
});

EventSchema.set('toJson', {
  virtuals: true
});
EventSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Event', EventSchema);

