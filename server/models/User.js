// "use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required:true
      },
      type: {
        type: String,
        required:true,
        enum: ['administrator', 'user']
      }
    },
    {
      collection: 'users'
    }
);

UserSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return err;
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.statics.validPassword = async (password, userPassword) =>
    await bcrypt.compare(password, userPassword, (err, isMatch) => {
      if (err) {
        throw err;
      }
      return isMatch;
    });

module.exports = mongoose.model('User', UserSchema);