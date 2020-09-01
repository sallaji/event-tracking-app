"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema(
    {
      date: {
        type: Date,
        required: 'Datum nicht eingegeben'
      },
      name: {
        type: String,
        required: 'Eventname nicht eingegeben',
      },
      responsible: {
        type: String
      },
      profits: [{
        type: Schema.Types.ObjectId,
        ref: 'Profit',
        autopopulate: true
      }],
      tickets: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Ticket',
          autopopulate: true
        }
      ],
      expenses: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Expense',
          autopopulate: true
        }
      ],
      sponsors: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Sponsor',
          autopopulate: true
        }
      ],
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: {
          select: ['name', 'type']
        }
      }
    }
);

EventSchema.statics = {
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

