// "use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true
      },
      email_is_verified: {
        type: Boolean,
        default: false
      },
      password: {
        type: String
      }
    },
    {
      collection: 'users'
    }
);

module.exports = mongoose.model('User', UserSchema);