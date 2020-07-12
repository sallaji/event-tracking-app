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
        type: String
      },
      type:{
        type: String
      }
    },
    {
      collection: 'users'
    }
);

UserSchema.methods.validPassword = async (password, userPassword) =>
    await bcrypt.compare(password, userPassword, (err, isMatch) => {
      if (err) {
        throw err;
      }
      return isMatch;
    });

UserSchema.methods.hashPassword = (password) => new Promise(
    (resolve, reject) => {
      bcrypt.genSalt(10,
          (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) {
                reject(err);
              }
              resolve(hash);
            })
          })
    });
const userTypes = ['administrator','user'];
UserSchema.methods.userTypeIsValid = (userType) => {
  console.log(userTypes.includes(userType))
  return userTypes.includes(userType)
};

module.exports = mongoose.model('User', UserSchema);