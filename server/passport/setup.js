const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
    new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
      User.findOne({email: email})
      .then(user => {
        if (!user) {
          return done(null, false,
              {message: 'Kein Nutzer mit gegebener eMail gefunden'})
        } else {
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              throw err;
            }
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, {message: 'Falsches Passwort'});
            }
          })
        }
      }).catch(err => done(null, false, {message: err}));
    })
);

module.exports = passport;


