"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
      name: {
        type: String,
        required: 'Benutzername nicht eingegeben',
        unique: true,
        validate: {
          validator: async function (v) {
            let self = this;
            let userIsUnique = true;
            await this.constructor.findOne({name: v},
                (err, user) => {
                  userIsUnique = user ? self.id === user.id : !user
                });
            return userIsUnique;
          },
          message: props => `Name '${props.value}' ist nicht verfügbar`,
          type: "String",
          path: "name"
        }
      },
      password: {
        type: String,
        required: 'Passwort nicht eingegeben',
        validate: {
          validator: function (v) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(v)
          },
          message: 'Das Passwort muss mindestens sechs Zeichen lang sein und'
              + ' mindestens ein Kleinbuchstaben, einen Grossbuchstaben und '
              + 'eine Zahl enthalten.',
          type: "String",
          path: "password"
        }
      },
      type: {
        type: String,
        required: 'Benutzertyp nicht eingegeben',
        enum: {
          values: ['administrator', 'user'],
          message: 'Falscher Benutzertyp'
        }
      },
      // events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    },
    {
      collection: 'users'
    }
);

UserSchema.index({name: 'text'});

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

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
UserSchema.set('toJSON', {
  virtuals: true
});

UserSchema.statics.validPassword = async (password, userPassword, callback) =>
    await bcrypt.compare(password, userPassword, (err, isMatch) =>
        callback(isMatch));

module.exports = mongoose.model('User', UserSchema);