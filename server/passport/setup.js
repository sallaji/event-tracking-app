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
    new LocalStrategy({usernameField: 'name'}, (name, password, done) => {
          User.findOne({name: name}, (err, user) => {
            if (err) {
              return done(err);
            }
            if (!user) {
              return done(null, false, {message: 'Inkorrekter Name'});
            }
            User.validPassword(password, user.password, (isMatch) => {
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {message: 'Falsches Passwort.'});
              }
            });
          });
        }
    ));

module.exports = passport;


