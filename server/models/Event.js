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

EventSchema.statics = {
  // search: function (q) {
  //   const query = (q && q !== '') ? {
  //     $text: {
  //       $search: q
  //     }
  //   } : {};
  //   let users = User.find(query);
  //   let usersIdMap = users.map((doc) => mongoose.Types.ObjectId(doc._id));
  //   console.log(usersIdMap);
  //   return this.find(query);
  // }
  search: function (q) {
    //TODO: Make the query retrieve all possible matches
    const query = (q && q !== '') ? {
      name: {
        $regex: new RegExp(q),
        $options: "i"
      }
    } : {};
    // let users = User.find(query);
    // let usersIdMap = users.map((doc) => mongoose.Types.ObjectId(doc._id));
    // console.log(usersIdMap);
    return this.find({$or: [{...query}]});
  }
};

EventSchema.index({name: 'text', responsible: 'text'});


EventSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
EventSchema.plugin(require('mongoose-autopopulate'));

EventSchema.set('toJSON', {
  virtuals: true
});
module.exports = mongoose.model('Event', EventSchema);

